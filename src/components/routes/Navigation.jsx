import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layouts
import PublicLayout from "@/Layouts/PublicLayout";
// import PrivateLayout from "@/Layouts/PrivateLayout";

// Main Pages
import Home from "../../pages/Home";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
// Error
import Error from "../_partials/Error";

// AuthContext
import { AuthProvider } from "@/context/authContext";
// import { ProtectedRoute } from "../_partials/Protectedroute";

// Scrolltop
import ScrollToTop from "../_partials/ScrollToTop";

function Navigation() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [location.pathname]);

  if (loading) return <div>Cargando...</div>; // Indicador de carga

  return (
    <div className="Navigation">
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
          {/* Página de error */}
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default Navigation;
