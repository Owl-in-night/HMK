import { useState } from "react";
import { Disclosure } from "@headlessui/react";

import { ModeToggle } from "./ModeToggle";
import LanguageToggle from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#" },
  { name: "Contacto", href: "#" },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-transparent">
      <div className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ${sidebarOpen ? 'bg-gray-200 dark:bg-stone-900' : ''}`} onClick={() => sidebarOpen && setSidebarOpen(false)}>
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón de menú para móviles */}
          <div className="flex items-center sm:hidden">
           
          </div>

          {/* Navegación normal en pantallas grandes */}
          <div className="hidden sm:flex sm:space-x-4">
            
          </div>

          {/* Controles de modo y lenguaje */}
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
