import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold">🐶 Bienvenido a MascoTEC 🐱</h1>
      <p className="lead mt-3">
        Aquí encontrarás perritos y gatitos esperando un hogar lleno de amor.  
      </p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/catalogo" className="btn btn-primary btn-lg">
          📖 Ver Catálogo
        </Link>
        <Link to="/adoptar" className="btn btn-success btn-lg">
          ❤️ Adoptar
        </Link>
        <Link to="/contacto" className="btn btn-outline-secondary btn-lg">
          📩 Contacto
        </Link>
      </div>

      <div className="mt-5">
        <img
          src="https://img.freepik.com/vector-premium/hotel-animales-domesticos-refugio-mascotas-servicio-veterinario-hogar-perros-o-gatos-loro-pajaro-ayuda-al-cachorro-cuidado-gatitos-centro-veterinario-casa-construccion-adopcion-gatitos-concepto-vector_533410-3379.jpg"
          alt="Refugio"
          className="img-fluid rounded shadow"
          style={{ maxHeight: "400px" }}
        />
      </div>
    </div>
  );
}

export default Home;
