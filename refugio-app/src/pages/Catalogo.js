import { Link } from "react-router-dom";
import mascotas from "../data/mascotas.json";

function Catalogo() {
  return (
    <div className="row">
      {mascotas.map((m) => (
        <div key={m.id} className="col-md-4 mb-3">
          <div className="card">
            <img
              src={m.fotoPortada}
              className="card-img-top"
              alt={m.nombre}
            />
            <div className="card-body">
              <h5 className="card-title">{m.nombre}</h5>
              <p className="card-text">{m.descripcion}</p>
              <Link to={`/mascota/${m.id}`} className="btn btn-primary">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Catalogo;
