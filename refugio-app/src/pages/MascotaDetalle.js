import { useParams, Link } from "react-router-dom";
import mascotas from "../data/mascotas.json";

function MascotaDetalle() {
  const { id } = useParams();
  const mascota = mascotas.find(m => m.id === parseInt(id));

  if (!mascota) return <p>No se encontró la mascota.</p>;

  return (
    <div className="card">
      <img src={mascota.foto} className="card-img-top" alt={mascota.nombre} />
      <div className="card-body">
        <h2>{mascota.nombre}</h2>
        <p>
          <strong>Especie:</strong> {mascota.especie} <br />
          <strong>Edad:</strong> {mascota.edad} <br />
          <strong>Ubicación:</strong> {mascota.ubicacion}
        </p>
        <p>{mascota.descripcion}</p>
        <Link to="/" className="btn btn-secondary">Volver</Link>
      </div>
    </div>
  );
}

export default MascotaDetalle;
