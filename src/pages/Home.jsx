import { useState } from "react";
import { useAuth } from "@/components/AuthContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [code, setCode] = useState("");
  const [selectedRole, setSelectedRole] = useState(""); // Estado para el rol seleccionado
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code || !selectedRole) {
      alert("Por favor, ingrese un código y seleccione un rol.");
      return;
    }

    // Lista de códigos válidos
    const validCodes = {
      admin: ["0001A", "0020B", "0020C", "0020D", "0020E"], // Admin accede a todos
      operador: ["0020B", "0020C", "0020D", "0020E"], // Operadores solo a sus códigos
    };

    // Si el rol es admin, puede ingresar con cualquier código válido
    if (selectedRole === "admin" || validCodes[selectedRole]?.includes(code)) {
      login(code);
    } else {
      alert("El código ingresado no coincide con el rol seleccionado.");
    }
  };

  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('/img/homesm.png')] md:bg-[url('/img/home.png')] bg-cover bg-center">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-yellow-400 tracking-tight text-balance sm:text-6xl">
              ¡Bienvenido a Hotel Maya Kakchiquel!
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-yellow-300 sm:text-xl/8">
              Ingresa tu código y selecciona tu rol para acceder a la
              plataforma.
            </p>

            {/* Formulario de inicio de sesión */}
            <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
              <div className="flex flex-col gap-4">
                {/* Select de Rol con Shadcn UI */}
                <Select onValueChange={setSelectedRole}>
                  <SelectTrigger className="w-full bg-white dark:bg-stone-900 px-3.5 py-2 rounded-md text-black dark:text-white ">
                    <SelectValue placeholder="Seleccione un rol" />
                  </SelectTrigger>
                  <SelectContent className="w-full bg-white dark:bg-stone-900 px-3.5 py-2 rounded-md text-black dark:text-white">
                    <SelectGroup>
                      <SelectLabel>Roles</SelectLabel>
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="operador">Operador</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* Campo de Código */}
                <label htmlFor="coderole" className="sr-only">
                  Ingresar código
                </label>
                <input
                  id="coderole"
                  name="coderole"
                  type="text"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Ingrese su código"
                  autoComplete="off"
                  className="min-w-0 flex-auto rounded-md bg-white dark:bg-stone-900 px-3.5 py-2 text-base text-black dark:text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-stone-600 dark:placeholder-gray-200 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />

                {/* Botón de Ingreso */}
                <button
                  type="submit"
                  className="w-full rounded-md uppercase bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Ingresar
                </button>
              </div>
            </form>
            {/* Fin Formulario */}
          </div>
        </div>
      </div>
    </div>
  );
}
