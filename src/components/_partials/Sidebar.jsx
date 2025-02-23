import { useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

export default function Sidebar() {
  const [t] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t("tags.home"), href: "/", current: true },
    { name: t("tags.about"), href: "/about", current: false },
    { name: t("tags.contact"), href: "/contact", current: false },
  ];

  return (
    <div className="flex">
      {/* Botón para abrir el Sidebar */}
      <button
        className="p-3 lg:hidden fixed top-4 left-4 bg-gray-800 text-white rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform lg:relative lg:translate-x-0 lg:w-64`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-6 lg:hidden">
            <h2 className="text-lg font-semibold">{t("tags.menu")}</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-2 rounded-md transition-colors hover:bg-gray-700 ${
                  item.current ? "bg-gray-800" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <LanguageToggle />
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 p-6 lg:ml-64">
        
      </div>
    </div>
  );
}
