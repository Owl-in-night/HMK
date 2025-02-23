import { Outlet } from "react-router-dom";
// import NavbarA from "@/components/_partials/NavbarA";
import Footer from "@/components/_partials/Footer";
import NavbarO from "@/components/_partials/NavbarO";
function OperadorLayout() {
  return (
    <div>
      <header>
        <NavbarO />
      </header>
      <main>
        <Outlet /> {/* Renderiza las páginas admin */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default OperadorLayout;
