import { Outlet } from "react-router-dom";
import SidebarA from "@/components/_partials/SidebarA";
import Footer from "@/components/_partials/Footer";

function FirtsLayout() {
  return (
    <div>
      <aside className="fixed top-0 left-0 h-screen bg-slate-50">
        <SidebarA />
      </aside>
      <main className="p-4 md:p-0 md:ml-16">
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
