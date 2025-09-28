import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import mascotas from "../data/mascotas.json";

function MascotaDetalle() {
  const { id } = useParams();
  const mascota = mascotas.find((m) => m.id === parseInt(id));

  // Array con todas las fotos (portada + extras)
  const fotos = mascota ? [mascota.fotoPortada, ...(mascota.fotosExtras || [])] : [];

  // Estado: foto seleccionada (por índice en el array)
  const [fotoIndex, setFotoIndex] = useState(0);

  // Estado modal
  const [mostrarModal, setMostrarModal] = useState(false);

  if (!mascota) return <p>No se encontró la mascota.</p>;

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
    <div className="card">
      {/* Foto principal */}
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
        <p>
          <strong>Especie:</strong> {mascota.especie} <br />
          <strong>Edad:</strong> {mascota.edad} <br />
          <strong>Ubicación:</strong> {mascota.ubicacion}
        </p>
        <p>{mascota.descripcion}</p>

        {/* Fotos extra */}
        {fotos.length > 1 && (
          <div className="mt-3">
            <h4>📸 Más fotos</h4>
            <div className="d-flex flex-wrap">
              {fotos.map((foto, idx) => (
                <img
                  key={idx}
                  src={foto}
                  alt={`Extra ${idx + 1}`}
                  className="m-2"
                  style={{
                    width: "120px",
                    height: "80px",
                    objectFit: "contain",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    cursor: "pointer",
                    border:
                      idx === fotoIndex
                        ? "3px solid #007bff"
                        : "2px solid #ccc",
                  }}
                  onClick={() => {
                    setFotoIndex(idx);
                    setMostrarModal(true);
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Videos */}
        {mascota.videos && mascota.videos.length > 0 && (
          <div className="mt-3">
            <h4>🎥 Videos</h4>
            {mascota.videos.map((video, index) =>
              video.includes("youtube") ? (
                <div key={index} className="mb-3">
                  <iframe
                    width="100%"
                    height="315"
                    src={video}
                    title={`Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div key={index} className="mb-3">
                  <video width="100%" height="315" controls>
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta video.
                  </video>
                </div>
              )
            )}
          </div>
        )}

        <Link to="/" className="btn btn-secondary mt-3">
          Volver
        </Link>
      </div>

      {/* Modal con navegación */}
      {mostrarModal && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
          onClick={() => setMostrarModal(false)}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh", position: "relative" }}
          >
            {/* Botón Anterior */}
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

            {/* Imagen ampliada */}
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

            {/* Botón Siguiente */}
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
