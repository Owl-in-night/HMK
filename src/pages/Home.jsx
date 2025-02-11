import { Facebook, Instagram } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// Sections editables
import SectionTwo from "@/components/_partials/SectionTwo";
import SectionThree from "@/components/_partials/SectionThree";
import SectionFour from "@/components/_partials/SectionFour";
function Home() {
  const [t] = useTranslation("global");

  useEffect(() => {
    document.title = `${t("tags.home")} | Hotel Maya Kakchiquel`;
  }, [t]);

  //Scroll
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Evita el comportamiento por defecto del <a>
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Desplazamiento suave
        block: "start", // Desplazarse al principio de la sección
      });
    }
  };

  return (
    <div className="relative isolate flex">
      {/* Marco Izquierdo (Solo en pantallas grandes) */}
      <aside className="hidden lg:block w-20 h-screen grid grid-cols-[20%_1fr]">
        <div className="flex flex-col items-center mt-56 mr-1 space-y-8">
          <h1 className="[writing-mode:vertical-lr] -scale-x-[1] -scale-y-[1] text-lg font-bold uppercase">
            {t("home.asides.name")}
          </h1>
          <div className="flex justify-center ml-2">
            <Link to={"https://www.facebook.com/hotelmayakakchiquel/"}>
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex justify-center ml-2">
            <Link to={"https://www.instagram.com/hotelmayakakchiquel/"}>
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Contenido Principal */}
      <div className="flex-1">
        {/* Sección 1: Imagen a pantalla completa */}
        <section
          className="w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: 'url("/img/home.jpg")' }}
        ></section>
        {/* Sección 2 */}
        <section id="section1" className="py-16">
          <SectionTwo />
        </section>

        {/* Sección 3 */}
        <section id="section2" className="py-16 ">
          <SectionThree />
        </section>

        {/* Sección 4 */}
        <section className="py-16">
          <SectionFour />
        </section>
      </div>

      {/* Marco Derecho con Botón de Navegación (Solo en pantallas grandes) */}
      <aside className="hidden lg:flex flex-col items-center w-20 h-screen">
        <div className="flex-grow"></div>{" "}
        {/* Espacio para empujar el botón hacia abajo */}
        <button
          className=" rounded-full text-black p-2 mb-24"
          onClick={(e) => scrollToSection(e, "section1")}
        >
          {" "}
          {/* Margen inferior */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </aside>
    </div>
  );
}

export default Home;
