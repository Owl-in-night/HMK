import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { useAuth } from "../AuthContext";
import { ModeToggle } from "./ModeToggle";
import LanguageToggle from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Menu, X } from "lucide-react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/Sheet" },
  { name: "Contacto", href: "#" },
];

export default function NavbarO() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth(); // Obtener la función de logout

  return (
    <Disclosure as="nav" className="bg-transparent">
      <div
        className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ${sidebarOpen ? "bg-gray-200 dark:bg-stone-900" : ""}`}
        onClick={() => sidebarOpen && setSidebarOpen(false)}
      >
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón de menú para móviles */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(true);
              }}
              className="p-2 text-gray-700 dark:text-gray-300"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Navegación normal en pantallas grandes */}
          <div className="hidden sm:flex sm:space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Controles de modo, lenguaje y logout */}
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <LanguageToggle />
            <LogOut
              onClick={logout}
              className="h-6 w-6 text-red-500 hidden md:block"
            />
          </div>
        </div>
      </div>

      {/* Sidebar para móviles */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-stone-800 shadow-md p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSidebarOpen(false)}
              className="mb-4 p-2 text-gray-700 dark:text-gray-300"
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                >
                  {item.name}
                </a>
              ))}
              {/* <LogOut onClick={logout} className="h-6 w-6 text-red-500 hidden md:block" /> */}
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-500"
              >
                <LogOut />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </Disclosure>
  );
}
