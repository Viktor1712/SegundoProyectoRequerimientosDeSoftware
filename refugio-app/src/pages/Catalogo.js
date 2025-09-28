import { Link } from "react-router-dom";
import mascotas from "../data/mascotas.json";
import { useState } from "react";

function Catalogo() {
  const [filtro, setFiltro] = useState("");

  const filtradas = mascotas.filter(m =>
    filtro === "" ? true : m.especie.toLowerCase() === filtro.toLowerCase()
  );

  return (
    <div>
      <div className="mb-3">
        <select
          className="form-select"
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
        >
          <option value="">Todas las especies</option>
          <option value="Perro">Perros</option>
          <option value="Gato">Gatos</option>
        </select>
      </div>

      <div className="row">
        {filtradas.map(m => (
          <div className="col-md-4 mb-4" key={m.id}>
            <div className="card h-100">
              <img src={m.foto} className="card-img-top" alt={m.nombre} />
              <div className="card-body">
                <h5 className="card-title">{m.nombre}</h5>
                <p className="card-text">
                  {m.especie} • {m.edad} <br />
                  📍 {m.ubicacion}
                </p>
                <Link to={`/mascota/${m.id}`} className="btn btn-primary">
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
