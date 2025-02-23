import { useTranslation } from "react-i18next";
import IconLight from "../../../public/icons/IconLight";

export default function Footer() {
  const { t } = useTranslation("global");

  // // Oculta el footer en las rutas de Registrese y Acceder
  // if ([`/Registrese`, `/Acceder`].includes(pathname)) return null;

  // Enlaces reutilizables
  const links = [
    { href: "https://reactnative.dev/", text: t("page.footer1") },
    { href: "https://vite.dev/guide/", text: t("page.footer2") },
    {
      href: "https://github.com/Owl-in-night?tab=repositories",
      text: t("page.footer3"),
    },
    { href: "https://discord.gg/RY7N6wgH", text: t("page.footer4") },
    { href: "/Politicas", text: t("page.footer5") },
    { href: "/Condiciones", text: t("page.footer6") },
  ];

  return (
    <footer className=" rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Hotel Maya Kakchiquel™
          </a>
          . Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
