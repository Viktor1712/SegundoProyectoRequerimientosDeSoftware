import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">
      <div
        className="p-5 text-center rounded shadow-lg"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <h1 className="fw-bold mb-3" style={{ color: "#4e54c8" }}>
          🐶 Bienvenido a MascoTEC 🐱
        </h1>
        <p className="lead mb-4">
          Aquí encontrarás perritos y gatitos esperando un hogar lleno de amor.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link
            to="/catalogo"
            className="btn btn-primary btn-lg"
            style={{ backgroundColor: "#4e54c8", borderColor: "#4e54c8" }}
          >
            📖 Ver Catálogo
          </Link>
          <Link
            to="/adoptar"
            className="btn btn-success btn-lg"
            style={{ backgroundColor: "#34d399", borderColor: "#34d399" }}
          >
            ❤️ Adoptar
          </Link>
          <Link
            to="/contacto"
            className="btn btn-outline-secondary btn-lg"
          >
            📩 Contacto
          </Link>
        </div>

        <div className="mt-5">
          <img
            src="https://img.freepik.com/vector-premium/hotel-animales-domesticos-refugio-mascotas-servicio-veterinario-hogar-perros-o-gatos-loro-pajaro-ayuda-al-cachorro-cuidado-gatitos-centro-veterinario-casa-construccion-adopcion-gatitos-concepto-vector_533410-3379.jpg"
            alt="Refugio"
            className="img-fluid rounded shadow"
            style={{
              maxHeight: "400px",
              border: "5px solid #4e54c8",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
