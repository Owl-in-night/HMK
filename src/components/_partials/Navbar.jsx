import { useState } from "react";
import { Disclosure, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import LanguageToggle from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, BedDouble, Utensils, Tickets, Car, LucideWaves, MapPinHouse, CircleHelp, UserPen, Star, ChevronDown, CirclePlus, Hotel } from "lucide-react";
import WavesLadder from "./WavesLadder";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Habitaciones", href: "/habitaciones", icon: BedDouble },
  { name: "Restaurante", href: "/restaurante", icon: Utensils },
  { name: "Salones", href: "/salones", icon: Tickets },
  { name: "Parqueo", href: "/parqueo", icon: Car },
  { name: "Piscina", href: "/piscina", icon: LucideWaves },
  { name: "Jacuzzi", href: "/jacuzzi", icon: WavesLadder },
];

const aboutUs = [
  { name: "Mapa", href: "/mapa", icon: MapPinHouse },
  { name: "Sobre Nosotros", href: "/about", icon: CircleHelp },
  { name: "Contáctanos", href: "/contact", icon: UserPen },
  { name: "Califícanos", href: "/rate", icon: Star },
];
export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Disclosure as="nav" className="bg-transparent">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" onClick={() => sidebarOpen && setSidebarOpen(false)}>
        <div className="relative flex h-16 items-center justify-between">

          {/* Contenedor para el logo */}
          <div className="flex items-center">
            <img src="/ruta-del-logo.png" alt="Logo de la empresa" className="h-10 w-auto" />
          </div>

          {/* Botón para abrir sidebar en móviles y tablets */}
          <div className="flex items-center md:flex">
            <button onClick={(e) => { e.stopPropagation(); setSidebarOpen(true); }} className="p-2 text-gray-700 dark:text-gray-300 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Contenedor de navegación (Oculto en tablets y móviles) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 ml-auto">
            {navigation.slice(0, 3).map((item) => (
              <Link key={item.name} to={item.href} className="text-gray-700 dark:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <item.icon className="h-5 w-5 mr-1" /> {item.name}
              </Link>
            ))}

            {/* Dropdowns */}
            <Listbox>
              <div className="relative">
                <ListboxButton className="bg-transparent text-gray-700 dark:text-gray-300 border rounded-md px-2 py-1 flex items-center gap-2">
                  <CirclePlus className="h-5 w-5" /> Servicios
                  <ChevronDown className="h-5 w-5 ml-2" />
                </ListboxButton>
                <ListboxOptions className="absolute mt-1 max-h-60 w-48 bg-white dark:bg-gray-800 border rounded-md shadow-lg z-50">
                  {navigation.slice(4).map((item) => (
                    <Link to={item.href} key={item.name}>
                      <ListboxOption value={item} className="cursor-pointer flex items-center px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <span className="flex items-center justify-center mr-2">
                          <item.icon className="h-5 w-5" />
                        </span>
                        {item.name}
                      </ListboxOption>
                    </Link>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>

            <Listbox>
              <div className="relative">
                <ListboxButton className="bg-transparent text-gray-700 dark:text-gray-300 border rounded-md px-2 py-1 flex items-center gap-2">
                  <Hotel className="h-5 w-5" /> Nosotros
                  <ChevronDown className="h-5 w-5 ml-2" />
                </ListboxButton>
                <ListboxOptions className="absolute mt-1 max-h-60 w-48 bg-white dark:bg-gray-800 border rounded-md shadow-lg z-50">
                  {aboutUs.slice(1).map((item) => (
                    <Link to={item.href} key={item.name}>
                      <ListboxOption value={item} className="cursor-pointer flex items-center px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <item.icon className="h-5 w-5 mr-2" />
                        {item.name}
                      </ListboxOption>
                    </Link>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>

            {/* Language Toggle */}
            <div className="flex items-center relative z-50">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Fondo oscuro detrás del sidebar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 left-0 z-50 w-60 bg-white dark:bg-stone-800 shadow-lg p-4 flex flex-col justify-between" // w-60 para un tamaño moderado
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cierre */}
              <div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="mb-3 p-2 text-gray-700 dark:text-gray-300"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Navegación */}
                <nav className="space-y-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center w-full text-left px-4 py-2 text-base text-gray-700 dark:text-gray-300 space-x-2 rounded-md hover:bg-gray-100 dark:hover:bg-stone-700"
                    >
                      <item.icon className="h-5 w-5" /> {/* Tamaño moderado */}
                      <span>{item.name}</span>
                    </a>
                  ))}

                  {/* Línea divisoria */}
                  <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700"></div>

                  {/* Sección "Nosotros" */}
                  {aboutUs.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center w-full text-left px-4 py-2 text-base text-gray-700 dark:text-gray-300 space-x-2 rounded-md hover:bg-gray-100 dark:hover:bg-stone-700"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* End Sidebar */}
    </Disclosure>
  );
}
