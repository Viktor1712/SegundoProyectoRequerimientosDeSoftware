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
    <div className="container mt-4">
      <h2 className="mb-4 text-center" style={{ color: "#6c5ce7" }}>
        🐾 Catálogo de Mascotas
      </h2>

      {/* Filtros */}
      <div className="row mb-4 g-2 justify-content-center">
        <div className="col-md-2">
          <select
            className="form-select shadow-sm"
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
            className="form-control shadow-sm"
            placeholder="Raza"
            value={filtroRaza}
            onChange={(e) => setFiltroRaza(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select shadow-sm"
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
            className="form-select shadow-sm"
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
            className="form-select shadow-sm"
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
      <div className="row g-4">
        {mascotasFiltradas.length > 0 ? (
          mascotasFiltradas.map((m) => (
            <div key={m.id} className="col-md-4 d-flex">
              <div className="card w-100 h-100 shadow-sm rounded-4">
                <img
                  src={m.fotoPortada}
                  className="card-img-top rounded-top-4"
                  alt={m.nombre}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{m.nombre}</h5>
                  <p className="card-text mb-2">
                    <strong>Especie:</strong> {m.especie} <br />
                    <strong>Raza:</strong> {m.raza} <br />
                    <strong>Tamaño:</strong> {m.tamaño} <br />
                    <strong>Ubicación:</strong> {m.ubicacion} <br />
                  </p>
                  <p
                    className="card-text text-muted"
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
                    className="btn mt-2"
                    style={{
                      backgroundColor: "#6c5ce7",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#5a4bcf")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#6c5ce7")
                    }
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No se encontraron mascotas con esos filtros.</p>
        )}
      </div>
    </div>
  );
}

export default Catalogo;
