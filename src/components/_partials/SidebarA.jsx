import {
  LifeBuoy,
  Menu,
  Facebook,
  Instagram,
  LucideWaves,
  Car,
  Tickets,
  Utensils,
  MapPinHouse,
  BedDouble,
  CircleHelp,
  UserPen,
  Home,
  Star,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import WavesLadder from "./WavesLadder";

export default function SidebarA() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Logo fuera del Sidebar con fondo */}
      <div className="absolute top-5 left-1 z-50 rounded hidden md:hidden lg:block">
        <img src="/img/logo.png" className="hidden md:block w-24" />
      </div>

      {/* Íconos de redes sociales fuera del Sidebar con fondo */}
      <div className="absolute bottom-5 left-5 z-50 rounded hidden md:block">
        <div className="flex flex-col space-y-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Botón para abrir el Sidebar */}
      <div className="absolute top-5 top-10 lg:top-1/2 left-0 lg:left-auto transform -translate-y-1/2 lg:translate-y-0">
        <button
          onClick={() => setIsOpen(true)}
          aria-controls="separator-sidebar"
          type="button"
          className="inline-flex items-center p-1 m-1 text-sm text-gray-100 md:text-gray-500 rounded-lg bg-slate-100 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <Menu className="w-6 h-6 md:w-12 md:h-12 text-stone-800" />
        </button>
      </div>

      {/* Overlay para cerrar el Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar con fondo bg-slate-50 */}
      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-50 w-64 h-screen transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full bg-slate-50">
          {/* Área superior interna: botón de cierre (sin línea, ícono a la izquierda) */}
          <div className="flex items-center justify-start px-3 py-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded hover:bg-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Área de navegación */}
          <div className="flex-1 overflow-y-auto px-3 py-4">
            <ul
              className="space-y-2 font-medium"
              style={{ userSelect: "none" }}
            >
              <li>
                <Link
                  to={"/"}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <Home className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ms-3">Inicio</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/habitaciones"}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <BedDouble className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Habitaciones
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/restaurante"}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <Utensils className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Restaurante
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/salones"}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <Tickets className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">Salones</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/parqueo"}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <Car className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">Parqueo</span>
                </Link>
              </li>

              <li>
                <Link
                  to={"/piscina"}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <LucideWaves className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ms-3">Piscina</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/jacuzzi"}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <WavesLadder className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">Jacuzzi</span>
                </Link>
              </li>
            </ul>
            <ul
              className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200"
              style={{ userSelect: "none" }}
            >
              <li>
                <Link
                  to={"/mapa"}
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
                >
                  <MapPinHouse className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ms-3">Mapa</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
                >
                  <CircleHelp className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ms-3">Sobre Nosotros</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
                >
                  <UserPen className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ms-3">Contáctanos</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/rate"}
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
                >
                  <Star className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ms-3">Califícanos</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
