import { Link } from "react-router-dom";
import { useState } from "react";
import mascotas from "../data/mascotas.json";

function Catalogo() {
  const [filtroEspecie, setFiltroEspecie] = useState("");
  const [filtroRaza, setFiltroRaza] = useState("");
  const [filtroTamaño, setFiltroTamaño] = useState("");
  const [filtroNiños, setFiltroNiños] = useState("");
  const [filtroOtrosAnimales, setFiltroOtrosAnimales] = useState("");

  const mascotasFiltradas = mascotas.filter((m) => {
    return (
      (!filtroEspecie || m.especie === filtroEspecie) &&
      (!filtroRaza ||
        m.raza.toLowerCase().includes(filtroRaza.toLowerCase())) &&
      (!filtroTamaño || m.tamaño === filtroTamaño) &&
      (!filtroNiños ||
        (filtroNiños === "si"
          ? m.compatibilidad.ninos
          : !m.compatibilidad.ninos)) &&
      (!filtroOtrosAnimales ||
        (filtroOtrosAnimales === "si"
          ? m.compatibilidad.otrosAnimales
          : !m.compatibilidad.otrosAnimales))
    );
  });

  return (
    <div>
      <h2 className="mb-3">🐾 Catálogo de Mascotas</h2>

      {/* Filtros */}
      <div className="row mb-4">
        <div className="col-md-2">
          <select
            className="form-select"
            value={filtroEspecie}
            onChange={(e) => setFiltroEspecie(e.target.value)}
          >
            <option value="">Especie</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Conejo">Conejo</option>
            <option value="Hurón">Hurón</option>
            <option value="Pájaro">Pájaro</option>
            <option value="Cobaya">Cobaya</option>
          </select>
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className="form-control"
            placeholder="Raza"
            value={filtroRaza}
            onChange={(e) => setFiltroRaza(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={filtroTamaño}
            onChange={(e) => setFiltroTamaño(e.target.value)}
          >
            <option value="">Tamaño</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={filtroNiños}
            onChange={(e) => setFiltroNiños(e.target.value)}
          >
            <option value="">¿Con niños?</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={filtroOtrosAnimales}
            onChange={(e) => setFiltroOtrosAnimales(e.target.value)}
          >
            <option value="">¿Con otros animales?</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="row">
        {mascotasFiltradas.map((m) => (
          <div key={m.id} className="col-md-4 mb-3 d-flex">
            <div className="card w-100 h-100 d-flex flex-column">
              {/* Imagen más grande */}
              <img
                src={m.fotoPortada}
                className="card-img-top"
                alt={m.nombre}
                style={{ height: "400px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{m.nombre}</h5>
                <p className="card-text">
                  <strong>Especie:</strong> {m.especie} <br />
                  <strong>Raza:</strong> {m.raza} <br />
                  <strong>Tamaño:</strong> {m.tamaño} <br />
                  <strong>Ubicación:</strong> {m.ubicacion} <br />
                </p>

                <p
                  className="card-text"
                  style={{
                    maxHeight: "60px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    flexGrow: 1,
                  }}
                >
                  {m.descripcion}
                </p>

                <Link
                  to={`/mascota/${m.id}`}
                  className="btn btn-primary mt-auto"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
        {mascotasFiltradas.length === 0 && (
          <p>No se encontraron mascotas con esos filtros.</p>
        )}
      </div>
    </div>
  );
}

export default Catalogo;
