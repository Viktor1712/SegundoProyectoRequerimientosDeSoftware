import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import mascotas from "../data/mascotas.json";

function AdoptionForm() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const idsParam = query.get("ids"); // ej: "1,2"
  const idsSeleccionados = idsParam ? idsParam.split(",") : [];

  const mascotasSeleccionadas = mascotas.filter((m) =>
    idsSeleccionados.includes(String(m.id))
  );

  const [formData, setFormData] = useState({
    experience: "",
    space: "",
    hasChildren: "",
    childrenAges: "",
    hasPets: "",
    petDetails: "",
    workingHours: "",
    dailyAvailability: "",
    outdoorSpace: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de adopción:", formData);
    alert(
      `✅ Tu solicitud para adoptar ${mascotasSeleccionadas
        .map((m) => m.nombre)
        .join(", ")} ha sido enviada con éxito.`
    );
  };

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg rounded-4" style={{ backgroundColor: "#fdf6f0" }}>
        <h2 className="mb-4 text-center" style={{ color: "#6c5ce7" }}>
          🐾 Formulario de Adopción
        </h2>

        {mascotasSeleccionadas.length > 0 && (
          <div className="text-center mb-4">
            <h4>Estás completando el formulario para adoptar:</h4>
            <Row className="justify-content-center mt-3 g-3">
              {mascotasSeleccionadas.map((m) => (
                <Col md={3} key={m.id}>
                  <Card className="shadow-sm rounded-3 p-2">
                    <strong>{m.nombre}</strong>
                    <img
                      src={m.fotoPortada}
                      alt={m.nombre}
                      className="img-fluid rounded mt-1"
                      style={{ maxHeight: "150px", objectFit: "cover" }}
                    />
                    <p className="mb-0">{m.especie} - {m.tamaño}</p>
                    <small className="text-muted">{m.ubicacion}</small>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}

        <Form onSubmit={handleSubmit}>
          {/* Experiencia previa */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Experiencia previa con mascotas</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="experience"
              placeholder="Cuéntanos si has tenido mascotas antes"
              value={formData.experience}
              onChange={handleChange}
              required
              className="shadow-sm rounded-3"
            />
          </Form.Group>

          {/* Espacio */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Espacio disponible en el hogar</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="space"
              placeholder="Ej: Casa con patio grande, apartamento, etc."
              value={formData.space}
              onChange={handleChange}
              required
              className="shadow-sm rounded-3"
            />
          </Form.Group>

          {/* Niños */}
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">¿Hay niños en casa?</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Sí"
                    name="hasChildren"
                    value="sí"
                    checked={formData.hasChildren === "sí"}
                    onChange={handleChange}
                    required
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="No"
                    name="hasChildren"
                    value="no"
                    checked={formData.hasChildren === "no"}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </Col>

            {formData.hasChildren === "sí" && (
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Edades de los niños</Form.Label>
                  <Form.Control
                    type="text"
                    name="childrenAges"
                    placeholder="Ej: 3 y 8 años"
                    value={formData.childrenAges}
                    onChange={handleChange}
                    className="shadow-sm rounded-3"
                  />
                </Form.Group>
              </Col>
            )}
          </Row>

          {/* Otras mascotas */}
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">¿Tienes otras mascotas?</Form.Label>
                <Form.Select
                  name="hasPets"
                  value={formData.hasPets}
                  onChange={handleChange}
                  required
                  className="shadow-sm rounded-3"
                >
                  <option value="">Selecciona...</option>
                  <option value="no">No</option>
                  <option value="perros">Sí, perros</option>
                  <option value="gatos">Sí, gatos</option>
                  <option value="otros">Sí, otros</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {formData.hasPets !== "" && formData.hasPets !== "no" && (
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Detalles de tus mascotas</Form.Label>
                  <Form.Control
                    type="text"
                    name="petDetails"
                    placeholder="Ej: 2 perros pequeños, 1 gato"
                    value={formData.petDetails}
                    onChange={handleChange}
                    className="shadow-sm rounded-3"
                  />
                </Form.Group>
              </Col>
            )}
          </Row>

          {/* Disponibilidad */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Horario laboral y disponibilidad diaria</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="workingHours"
              placeholder="Ej: Trabajo de 8am a 5pm, alguien en casa por la tarde"
              value={formData.workingHours}
              onChange={handleChange}
              required
              className="shadow-sm rounded-3"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Tiempo diario que podrías dedicarle a la mascota</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="dailyAvailability"
              placeholder="Ej: 2 horas de paseo + 4 horas de convivencia"
              value={formData.dailyAvailability}
              onChange={handleChange}
              required
              className="shadow-sm rounded-3"
            />
          </Form.Group>

          {/* Espacio exterior */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">¿Cuentas con espacio exterior (patio/jardín)?</Form.Label>
            <Form.Select
              name="outdoorSpace"
              value={formData.outdoorSpace}
              onChange={handleChange}
              required
              className="shadow-sm rounded-3"
            >
              <option value="">Selecciona...</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
              <option value="parcial">Espacio pequeño compartido</option>
            </Form.Select>
          </Form.Group>

          {/* Subir foto */}
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Subir foto del hogar (opcional)</Form.Label>
            <Form.Control
              type="file"
              name="file"
              onChange={handleChange}
              className="shadow-sm rounded-3"
            />
          </Form.Group>

          {/* Botón */}
          <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              className="px-5 py-2 fw-bold"
              style={{
                background: "linear-gradient(90deg, #6c5ce7, #a29bfe)",
                border: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #5a4bcf, #8577fe)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #6c5ce7, #a29bfe)")
              }
            >
              Enviar Información 🐶
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default AdoptionForm;
