import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layouts
//import PublicLayout from "@/Layouts/PublicLayout";
// import PrivateLayout from "@/Layouts/PrivateLayout";

// Main Pages
import Dashboard from "@/pages/Dashboard";
//import Home from "@/pages/Home";
// Error
import Error from "../_partials/Error";

// AuthContext
//
// import { ProtectedRoute } from "../ProtectedRoute";
// import { ProtectedRoute } from "../ProtectedRoute";
// import { ProtectedRoute } from "../_partials/Protectedroute";

// Scrolltop
import ScrollToTop from "../_partials/ScrollToTop";
import FirtsLayout from "@/Layouts/FirtsLayout";
// import AdminLayout from "@/Layouts/AdminLayout";
// import OperadorLayout from "@/Layouts/OperadorLayout";
// import OperadorA from "@/pages/OperadorA";

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

      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<FirtsLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Dashboard />} />
        </Route>
        {/* Admin Layout */}
        {/* <Route path="/" element={<AdminLayout />}>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/" element={<OperadorLayout />}>
            <Route
              path="/Operador"
              element={
                <ProtectedRoute>
                  <OperadorA />
                </ProtectedRoute>
              }
            />
          </Route> */}
        {/* Página de error */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Navigation;
