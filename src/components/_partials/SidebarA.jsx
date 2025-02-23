import {
  BookType,
  ChartPie,
  Database,
  Landmark,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Menu,
  NotebookText,
  Settings,
  Shapes,
  Users,
  Facebook,
  Github,
  Instagram,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SidebarA() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Logo fuera del Sidebar con fondo */}
      <div className="absolute top-5 left-5 z-50 rounded">
        <img src="path_to_logo.png" alt="Logo" className="hidden md:block w-24" />
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
          {/* <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a> */}
        </div>
      </div>

      {/* Botón para abrir el Sidebar */}
      <div className="absolute top-5 lg:top-1/2 left-0 lg:left-auto transform -translate-y-1/2 lg:translate-y-0 z-40">
        <button
          onClick={() => setIsOpen(true)}
          aria-controls="separator-sidebar"
          type="button"
          className="inline-flex items-center p-1 m-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <Menu className="w-6 h-6 md:w-12 md:h-12" />
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
          {/* Área superior interna: botón de cierre */}
          <div className="flex items-center justify-end px-3 py-4 border-b border-gray-200">
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
                  to="/dashboard"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <LayoutDashboard className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/inventario"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <Database className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Inventario
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <BookType className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">Datos</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <NotebookText className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Reportes
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <ChartPie className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Gráficos
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <Users className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Usuarios
                  </span>
                </a>
              </li>
              <li>
                <a className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                  <LogOut className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Cerrar sesión
                  </span>
                </a>
              </li>
            </ul>
            <ul
              className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200"
              style={{ userSelect: "none" }}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
                >
                  <Settings className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ms-3">Ajustes</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
                >
                  <Landmark className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ms-3">API</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
                >
                  <Shapes className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ms-3">Herramientas</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
                >
                  <LifeBuoy className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ms-3">Help</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
