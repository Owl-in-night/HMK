import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function VerifyCode() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || ""; // Obtener el correo desde el estado
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/verify-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("¡Código verificado con éxito!");
        navigate(`/Panel`, { replace: true }); // Redirigir al panel principal
      } else {
        setError(data.message || "Código incorrecto.");
      }
    } catch (error) {
      console.error("Error al verificar el código:", error);
      setError("Error de red, por favor intenta de nuevo.");
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <h1 className="text-3xl font-bold text-center">Verifica tu cuenta</h1>
        <form onSubmit={handleSubmit} className="grid gap-4">
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="grid gap-2">
            <Label htmlFor="code">Código de verificación</Label>
            <Input
              id="code"
              type="text"
              name="code"
              placeholder="Ingresa el código de 6 dígitos"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Verificar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default VerifyCode;
