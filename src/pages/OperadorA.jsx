import React, { useState } from "react";
import axios from "axios";
import { CirclePower } from "lucide-react";

export default function OperadorA() {
  const [temperature, setTemperature] = useState({
    celsius: null,
    fahrenheit: null,
  });
  const [isFetching, setIsFetching] = useState(false);
  const [highestTemp, setHighestTemp] = useState(null);
  const [highestTempF, setHighestTempF] = useState(null);
  const [lowestTemp, setLowestTemp] = useState(null);
  const [lowestTempF, setLowestTempF] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  const fetchTemperature = async () => {
    try {
      const response = await axios.get("http://raspberrypi:5000/temperature");
      if (response.data && response.data.temperature !== undefined) {
        const tempC = response.data.temperature;
        const tempF = (tempC * 9) / 5 + 32;
        setTemperature({ celsius: tempC, fahrenheit: tempF });
        setHighestTemp((prev) => (prev === null || tempC > prev ? tempC : prev));
        setLowestTemp((prev) => (prev === null || tempC < prev ? tempC : prev));
        setHighestTempF((prev) => (prev === null || tempF > prev ? tempF : prev));
        setLowestTempF((prev) => (prev === null || tempF < prev ? tempF : prev));
      } else {
        console.warn("Respuesta de la API inválida:", response.data);
      }
    } catch (error) {
      console.error("Error fetching temperature:", error);
    }
  };

  const startFetching = () => {
    if (!isFetching) {
      fetchTemperature();
      const id = setInterval(fetchTemperature, 5000);
      setIntervalId(id);
      setIsFetching(true);
    }
  };

  const stopFetching = () => {
    if (isFetching) {
      clearInterval(intervalId);
      setIsFetching(false);
    }
  };

  // Mostrar datos en el dashboard (opcional)
  const temp = [
    {
      id: 1,
      name: "Temperatura máxima",
      value:
        highestTemp !== null && highestTempF !== null
          ? `${highestTemp.toFixed(2)} °C / ${highestTempF.toFixed(2)} °F`
          : "N/A",
    },
    {
      id: 2,
      name: "Temperatura mínima",
      value:
        lowestTemp !== null && lowestTempF !== null
          ? `${lowestTemp.toFixed(2)} °C / ${lowestTempF.toFixed(2)} °F`
          : "N/A",
    },
  ];

  const saveTemperature = async () => {
    console.log("Guardando datos:", {
      celsius: temperature.celsius,
      fahrenheit: temperature.fahrenheit,
      max: highestTemp,
      maxF: highestTempF,
      min: lowestTemp,
      minF: lowestTempF,
    });
  
    try {
      await axios.post("http://localhost:3001/write", {
        values: [
          [
            new Date().toLocaleString(), // Fecha y hora
            temperature.celsius,
            temperature.fahrenheit,
            highestTemp,
            highestTempF,
            lowestTemp,
            lowestTempF,
          ],
        ],
      });
      console.log("Datos guardados exitosamente.");
    } catch (error) {
      console.error("Error guardando datos:", error);
    }
  };
  

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <CirclePower
          className={`w-32 h-32 mx-auto mb-3 ${
            isFetching ? "text-green-500" : "text-red-500"
          }`}
        />
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-center mb-12">
          {temperature.celsius !== null && temperature.fahrenheit !== null
            ? `${temperature.celsius.toFixed(2)} °C / ${temperature.fahrenheit.toFixed(2)} °F`
            : "Cargando..."}
        </h2>
        <div className="flex justify-center gap-x-6 mb-16">
          <button
            onClick={startFetching}
            type="button"
            className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            disabled={isFetching}
          >
            Iniciar Captura
          </button>
          <button
            onClick={stopFetching}
            type="button"
            className="rounded-md bg-gray-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
            disabled={!isFetching}
          >
            Detener Captura
          </button>
          <button
            onClick={saveTemperature}
            className="rounded-md bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500"
          >
            Guardar Datos
          </button>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
          {temp.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
