import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import mascotas from "../data/mascotas.json";

function MascotaDetalle() {
  const { id } = useParams();
  const mascota = mascotas.find((m) => String(m.id) === String(id));
  const { agregarAlCarrito } = useCarrito();
  const [fotoIndex, setFotoIndex] = useState(0);
  const [mostrarModal, setMostrarModal] = useState(false);

  if (!mascota) return <p>No se encontró la mascota.</p>;

  const fotos = [mascota.fotoPortada, ...(mascota.fotosExtras || [])].filter(Boolean);
  const fotoSeleccionada = fotos[fotoIndex];

  const siguienteFoto = (e) => {
    e.stopPropagation();
    setFotoIndex((prev) => (prev + 1) % fotos.length);
  };

  const anteriorFoto = (e) => {
    e.stopPropagation();
    setFotoIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  return (
    <div className="card mb-4">
      {/* Imagen principal */}
      <img
        src={fotoSeleccionada}
        className="card-img-top"
        alt={mascota.nombre}
        style={{
          maxHeight: "400px",
          width: "100%",
          objectFit: "contain",
          backgroundColor: "#f8f9fa",
          cursor: "pointer",
        }}
        onClick={() => setMostrarModal(true)}
      />

      <div className="card-body">
        <h2>{mascota.nombre}</h2>

        {/* Información completa */}
        <div>
          {Object.entries(mascota).map(([key, value]) => {
            if (["id", "fotoPortada", "fotosExtras"].includes(key)) return null;

            if (typeof value === "object" && value !== null) {
              if (Array.isArray(value)) {
                value = value.join(", ");
              } else {
                value = Object.entries(value)
                  .map(([k, v]) => `${k}: ${v ? "Sí" : "No"}`)
                  .join(", ");
              }
            }

            return (
              <p key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
                {value.toString()}
              </p>
            );
          })}
        </div>

        {/* Botones */}
        <div className="d-flex gap-2 mt-3">
          <Link to="/" className="btn btn-secondary">
            Volver
          </Link>

          {/* Adopción directa: enviando el ID como query param */}
          <Link
            to={`/adoptar?ids=${mascota.id}`}
            className="btn btn-success"
          >
            ❤️ Adoptar
          </Link>

          <button
            className="btn btn-warning"
            onClick={() => agregarAlCarrito(mascota)}
          >
            🛒 Agregar al carrito
          </button>
        </div>
      </div>

      {/* Modal de fotos */}
      {mostrarModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={() => setMostrarModal(false)}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh", position: "relative" }}
          >
            {fotos.length > 1 && (
              <button
                className="btn btn-light"
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                onClick={anteriorFoto}
              >
                ⬅
              </button>
            )}

            <img
              src={fotoSeleccionada}
              alt="Vista ampliada"
              style={{
                maxHeight: "90%",
                maxWidth: "90%",
                objectFit: "contain",
                borderRadius: "10px",
              }}
              onClick={(e) => e.stopPropagation()}
            />

            {fotos.length > 1 && (
              <button
                className="btn btn-light"
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                onClick={siguienteFoto}
              >
                ➡
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MascotaDetalle;
