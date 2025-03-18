import SectionFour from "@/components/_partials/SectionFour";
import SectionThree from "@/components/_partials/SectionThree";
import SectionTwo from "@/components/_partials/SectionTwo";

function HomePage() {
  return (
    <div className="flex-1 transition-all duration-300">
      {/* Sección 1: Imagen de pantalla completa */}
      <section className="w-full h-screen bg-transparent flex flex-col items-center justify-center relative">
        <img
          alt=""
          src="/img/homea.png"
          className="absolute inset-0 -z-10 w-full h-full object-cover shadow-xl object-right md:object-center hidden md:hidden lg:block"
        />
        {/* Tablet */}
        <img
          alt=""
          src="/img/homet.png"
          className="absolute inset-0 -z-10 w-full h-full object-cover shadow-xl object-right md:object-center hidden md:block lg:hidden"
        />
        {/* Mobile */}
        <img
          alt=""
          src="/img/homem.png"
          className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center block md:hidden lg:hidden"
        />
        <div className="mx-auto max-w-2xl sm:py-32 flex flex-col items-center text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Hotel Maya Kakchiquel
          </h1>

          {/* Sección de Reservación */}
          <div className="mt-12 w-full max-w-lg px-6 py-4 bg-white bg-opacity-80 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
              Reserva tu estadía
            </h2>
            <form action="#" method="POST" className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />

              {/* Campo de Check-in */}
              <input
                type="date"
                placeholder="Fecha de Check-in"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="date"
                placeholder="Fecha de Check-out"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />


              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Número de noches"
                  className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
                <input
                  type="number"
                  placeholder="Número de personas"
                  className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-md bg-blue-600 text-white py-2 text-lg font-semibold hover:bg-blue-700"
              >
                Reservar Ahora
              </button>
            </form>
          </div>
        </div>
      </section>



      {/* Sección 2 */}
      <section className="w-full h-full bg-transparent flex flex-col items-center justify-center relative">
        <SectionTwo />
      </section>

      {/* Sección 3 */}
      <section className="flex items-center justify-center">
        <SectionThree />
      </section>

      {/* Sección 4 */}
      <section className="flex py-12 items-center justify-center">
        <div className="max-w-screen-xl w-full">
          <SectionFour />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
