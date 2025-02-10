import { Outlet } from "react-router-dom"

function PrivateLayout() {
  return (
    <div>
    <header>Private Header</header>
    <main>
      <Outlet /> {/* Renderiza las páginas privadas */}
    </main>
  </div>
  )
}

export default PrivateLayout