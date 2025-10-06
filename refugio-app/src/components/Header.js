import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

function Header() {
  const { carrito } = useCarrito();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(90deg, #4e54c8, #8f94fb)", // degradado azul a morado
      }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🐾 Refugio de Mascotas
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">
                📖 Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/adoptar">
                ❤️ Adoptar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                📩 Contacto
              </Link>
            </li>

            <li className="nav-item ms-3">
              <Link className="nav-link position-relative" to="/carrito">
                🛒
                {carrito.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {carrito.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
