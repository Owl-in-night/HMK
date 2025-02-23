import React, { useEffect, useState } from "react";


import {
  Thermometer,
  ChartArea,
  NotebookPen,
  FileText,
  SquareArrowOutUpRight,
  Leaf,
  BrickWall,
} from "lucide-react";

function Dashboard() {
  

  return (
    <div className="flex-1 transition-all duration-300">
      {/* Sección 1: Imagen de pantalla completa */}
      <section className="w-full h-screen">
        <img
          src="/img/home.jpg" // Reemplaza con la URL de tu imagen
          className="hidden md:block object-cover w-full h-full"
        />
        <h1 className="text-4xl font-bold text-yellow-500 md:hidden">Hola</h1>
      </section>

      {/* Sección 2: Contenido del Dashboard */}
      <section className="p-6">
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {/* Card 1 */}
            <div className="aspect-video rounded-xl p-6 bg-slate-50 border border-gray-200 shadow-sm dark:bg-stone-800 dark:border-stone-700">
              <Thermometer className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Temperaturas
                </h5>
              </a>
              <div className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                
              </div>
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                Visualizar datos de temperatura
                <SquareArrowOutUpRight className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="aspect-video rounded-xl p-6 bg-slate-50 border border-gray-200 shadow-sm dark:bg-stone-800 dark:border-stone-700">
              <Leaf className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Pirólisis
                </h5>
              </a>
              <div className="mb-3 font-normal text-gray-500 dark:text-gray-400">
             
              </div>
              <a
                href="https://docs.google.com/spreadsheets/d/18xQhwtCy7nI3E_c6AGkfpduV_3L84fryk87u_jQXQbk/edit?gid=1449944635#gid=1449944635"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                Visualizar más datos de pirólisis
                <SquareArrowOutUpRight className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="aspect-video rounded-xl p-6 bg-slate-50 border border-gray-200 shadow-sm dark:bg-stone-800 dark:border-stone-700">
              <BrickWall className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Cantidad de colección
                </h5>
              </a>
              <div className="flex">
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400"></p>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 ml-4"></p>
              </div>
              <a
                href="https://docs.google.com/spreadsheets/d/1CLFeyIRNjiqyZJwyEZLn5m9u9KPYuqnus-_jADVQLKc/edit?gid=0#gid=0"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                Visualizar más datos de colección
                <SquareArrowOutUpRight className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]" />
              </a>
            </div>
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            {/* Card 4 */}
            <div className="aspect-video rounded-xl p-6 bg-slate-50 border border-gray-200 shadow-sm dark:bg-stone-800 dark:border-stone-700">
              <ChartArea className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Gráficas
                </h5>
              </a>
              {/* Aquí puedes insertar tus gráficas */}
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                Más gráficas
                <SquareArrowOutUpRight className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]" />
              </a>
            </div>

            {/* Card 5 */}
            <div className="aspect-video rounded-xl p-6 bg-slate-50 border border-gray-200 shadow-sm dark:bg-stone-800 dark:border-stone-700">
              <NotebookPen className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Últimas temperaturas registradas
                </h5>
              </a>
              {/* Aquí puedes insertar la data adicional */}
            </div>
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-1">
            {/* Inventario */}
            <div className="aspect-video rounded-xl p-6 bg-slate-50 border border-gray-200 shadow-sm dark:bg-stone-800 dark:border-stone-700">
              <FileText className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Inventario
                </h5>
              </a>
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                Ir a inventario
                <SquareArrowOutUpRight className="w-4 h-4 ms-2.5 rtl:rotate-[270deg]" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
