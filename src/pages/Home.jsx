import SectionFour from "@/components/_partials/SectionFour";
import SectionThree from "@/components/_partials/SectionThree";
import SectionTwo from "@/components/_partials/SectionTwo";

function HomePage() {
  return (
    <div className="flex-1 transition-all duration-300">
      {/* Sección 1: Imagen de pantalla completa */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <img
          alt=""
          src="/img/homea.png"
          className="absolute inset-0 -z-10 pl-16 size-full object-cover shadow-xl object-right md:object-center hidden md:block"
        />
        {/* Tablet*/}
        <img
          alt=""
          src="/img/homet.png"
          className="absolute inset-0 -z-10 pl-16 size-full object-cover shadow-xl object-right md:object-center hidden md:block lg:hidden"
        />
        {/* mobile */}
        <img
          alt=""
          src="/img/homem.png"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center block md:hidden"
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Hotel Maya Kakchiquel
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-slate-100 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-slate-200 px-3.5 py-2.5 text-sm font-semibold  shadow-xs hover:bg-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ¡Explora ahora!
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Sección 2 */}
      <section className="p-3 min-h-screen flex items-center justify-center ">
        <div className="max-w-screen-xl w-full">
          <SectionTwo />
        </div>
      </section>

      {/* Sección 3 */}
      <section className="p-3 min-h-screen flex items-center justify-center ">
        <div className="max-w-screen-xl w-full">
          <SectionThree />
        </div>
      </section>

      {/* Sección 4 */}
      <section className="p-3 min-h-screen flex items-center justify-center ">
        <div className="max-w-screen-xl w-full">
          <SectionFour />
        </div>
      </section>

      {/* Sección 5
      <section className="p-3 min-h-screen flex items-center justify-center bg-white">
        
      </section> */}
    </div>
  );
}

export default HomePage;
