import { Link } from "react-router-dom";
import { useState } from "react";
import mascotas from "../data/mascotas.json";

function Catalogo() {
  const [filtroEspecie, setFiltroEspecie] = useState("");
  const [filtroRaza, setFiltroRaza] = useState("");
  const [filtroTamaño, setFiltroTamaño] = useState("");
  const [filtroNiños, setFiltroNiños] = useState("");
  const [filtroOtrosPerros, setFiltroOtrosPerros] = useState("");
  const [filtroGatos, setFiltroGatos] = useState("");

  const mascotasFiltradas = mascotas.filter((m) => {
    return (
      (!filtroEspecie || m.especie === filtroEspecie) &&
      (!filtroRaza || m.raza?.toLowerCase().includes(filtroRaza.toLowerCase())) &&
      (!filtroTamaño || m.tamaño === filtroTamaño) &&
      (!filtroNiños || (filtroNiños === "si" ? m.compatibilidad.ninos : !m.compatibilidad.ninos)) &&
      (!filtroOtrosPerros || (filtroOtrosPerros === "si" ? m.compatibilidad.otrosPerros : !m.compatibilidad.otrosPerros)) &&
      (!filtroGatos || (filtroGatos === "si" ? m.compatibilidad.gatos : !m.compatibilidad.gatos))
    );
  });

  return (
    <div>
      <h2 className="mb-3">🐾 Catálogo de Mascotas</h2>

      {/* Filtros */}
      <div className="row mb-4">
        <div className="col-md-2">
          <select className="form-select" value={filtroEspecie} onChange={(e) => setFiltroEspecie(e.target.value)}>
            <option value="">Especie</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
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
          <select className="form-select" value={filtroTamaño} onChange={(e) => setFiltroTamaño(e.target.value)}>
            <option value="">Tamaño</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select" value={filtroNiños} onChange={(e) => setFiltroNiños(e.target.value)}>
            <option value="">¿Con niños?</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select" value={filtroOtrosPerros} onChange={(e) => setFiltroOtrosPerros(e.target.value)}>
            <option value="">¿Con otros perros?</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select" value={filtroGatos} onChange={(e) => setFiltroGatos(e.target.value)}>
            <option value="">¿Con gatos?</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="row">
        {mascotasFiltradas.map((m) => (
          <div key={m.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={m.fotoPortada} className="card-img-top" alt={m.nombre} />
              <div className="card-body">
                <h5 className="card-title">{m.nombre}</h5>
                <p className="card-text">
                  <strong>Especie:</strong> {m.especie} <br />
                  <strong>Raza:</strong> {m.raza || "No especificada"} <br />
                  <strong>Tamaño:</strong> {m.tamaño} <br />
                  <strong>Ubicación:</strong> {m.ubicacion} <br />
                </p>
                <p className="card-text" style={{ maxHeight: "80px", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {m.descripcion}
                </p>
                <Link to={`/mascota/${m.id}`} className="btn btn-primary">Ver más</Link>
              </div>
            </div>
          </div>
        ))}
        {mascotasFiltradas.length === 0 && <p>No se encontraron mascotas con esos filtros.</p>}
      </div>
    </div>
  );
}

export default Catalogo;
