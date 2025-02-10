import { Outlet } from "react-router-dom";
import Navbar from "@/components/_partials/Navbar";
import Footer from "@/components/_partials/Footer";
function PublicLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet /> {/* Renderiza las páginas públicas */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PublicLayout;
