import { Outlet } from "react-router-dom";
// import SidebarA from "@/components/_partials/SidebarA";
import Footer from "@/components/_partials/Footer";
import Navbar from "../components/_partials/Navbar";

function FirtsLayout() {
  return (
    <div>
      <header className="p-4 md:p-0 md:ml-16">
        <Navbar  />
      </header>
      <main>
        {" "}
        {/* Añadido ml-8 para margen izquierdo de 32px */}
        <Outlet />
      </main>
      <footer className="p-4 md:p-0 md:ml-16">
        <Footer />
      </footer>
    </div>
  );
}

export default FirtsLayout;
