import React, { useState } from "react";

const API_KEY = "AIzaSyDs2b8jNJSC1R8UgetdniFxM64pUQ_TlI0";
const SPREADSHEET_ID = "1yS1puiIOMdK8gu6XuUyXCwBo1sELHtgK_QhLDMM9zMg";
const RANGE = "Test!A1:E10"; // Ajusta según la ubicación de los datos

const GoogleSheets = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState(["Ejemplo", "Dato"]);

  // Leer datos de Google Sheets
  const readSheet = async () => {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
      );
      const result = await response.json();
      setData(result.values || []);
    } catch (error) {
      console.error("Error leyendo la hoja:", error);
    }
  };

  // Escribir datos en Google Sheets (sin autenticación)
  const writeSheet = async () => {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?valueInputOption=USER_ENTERED&key=${API_KEY}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            range: RANGE,
            majorDimension: "ROWS",
            values: [newData],
          }),
        }
      );
      const result = await response.json();
      console.log("Datos guardados:", result);
      readSheet(); // Actualiza los datos después de escribir
    } catch (error) {
      console.error("Error escribiendo en la hoja:", error);
    }
  };

  return (
    <div>
      <h1>Google Sheets API en React</h1>
      <button onClick={readSheet}>Leer Datos</button>
      <button onClick={writeSheet}>Escribir Datos</button>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{row.join(", ")}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleSheets;
