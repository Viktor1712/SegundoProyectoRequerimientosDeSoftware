import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import mascotas from "../data/mascotas.json";

function MascotaDetalle() {
  const { id } = useParams();
  const mascota = mascotas.find((m) => String(m.id) === String(id));

  const [fotoIndex, setFotoIndex] = useState(0);
  const [mostrarModal, setMostrarModal] = useState(false);

  if (!mascota) return <p>No se encontró la mascota.</p>;

  // ✅ Portada + extras, quitando vacíos
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
      {/* Foto principal */}
      <img
        src={mascota.fotoPortada}
        className="card-img-top"
        alt={mascota.nombre}
        style={{
          maxHeight: "400px",
          width: "100%",
          objectFit: "contain",
          backgroundColor: "#f8f9fa",
          cursor: "pointer",
        }}
        onClick={() => {
          setFotoIndex(0); // portada siempre índice 0
          setMostrarModal(true);
        }}
      />

      <div className="card-body">
        <h2>{mascota.nombre}</h2>
        <p>
          <strong>Especie:</strong> {mascota.especie} <br />
          <strong>Raza:</strong> {mascota.raza} <br />
          <strong>Sexo:</strong> {mascota.sexo} <br />
          <strong>Edad:</strong> {mascota.edad} <br />
          <strong>Tamaño:</strong> {mascota.tamaño} <br />
          <strong>Ubicación:</strong> {mascota.ubicacion} <br />
          <strong>Estado de salud:</strong> {mascota.estadoSalud} <br />
          <strong>Vacunas:</strong> {mascota.vacunas.join(", ")} <br />
          <strong>Condiciones especiales:</strong>{" "}
          {mascota.condicionesEspeciales.join(", ")} <br />
          <strong>Comportamiento:</strong> {mascota.comportamiento.join(", ")}{" "}
          <br />
          <strong>Compatible con niños:</strong>{" "}
          {mascota.compatibilidad.ninos ? "Sí" : "No"} <br />
          <strong>Compatible con otros animales:</strong>{" "}
          {mascota.compatibilidad.otrosAnimales ? "Sí" : "No"}
        </p>

        <p style={{ whiteSpace: "pre-line" }}>{mascota.descripcion}</p>

        {/* Fotos extras + portada en miniaturas */}
        {fotos.length > 1 && (
          <div className="mt-3">
            <h4>📸 Galería de fotos</h4>
            <div className="d-flex flex-wrap">
              {fotos.map((foto, idx) => (
                <img
                  key={idx}
                  src={foto}
                  alt={`Foto ${idx + 1}`}
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

        {/* Botones */}
        <div className="d-flex gap-2 mt-3">
          <Link to="/" className="btn btn-secondary">
            Volver
          </Link>
          <Link to={`/adoptar/${mascota.id}`} className="btn btn-success">
            ❤️ Adoptar
          </Link>
        </div>
      </div>

      {/* Modal con navegación */}
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
