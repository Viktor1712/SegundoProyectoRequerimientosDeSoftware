import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function AdoptionForm() {
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
    alert("✅ Tu información de adopción ha sido enviada con éxito.");
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">🐾 Información para la Adopción</h2>
      <Form onSubmit={handleSubmit}>
        
        {/* Experiencia previa */}
        <Form.Group className="mb-3">
          <Form.Label>Experiencia previa con mascotas</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="experience"
            placeholder="Cuéntanos si has tenido mascotas antes"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Espacio disponible */}
        <Form.Group className="mb-3">
          <Form.Label>Espacio disponible en el hogar</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="space"
            placeholder="Ej: Casa con patio grande, apartamento, etc."
            value={formData.space}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Niños en casa */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>¿Hay niños en casa?</Form.Label>
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
                <Form.Label>Edades de los niños</Form.Label>
                <Form.Control
                  type="text"
                  name="childrenAges"
                  placeholder="Ej: 3 y 8 años"
                  value={formData.childrenAges}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          )}
        </Row>

        {/* Otras mascotas */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>¿Tienes otras mascotas?</Form.Label>
              <Form.Select
                name="hasPets"
                value={formData.hasPets}
                onChange={handleChange}
                required
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
                <Form.Label>Detalles de tus mascotas</Form.Label>
                <Form.Control
                  type="text"
                  name="petDetails"
                  placeholder="Ej: 2 perros pequeños, 1 gato"
                  value={formData.petDetails}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          )}
        </Row>

        {/* Disponibilidad */}
        <Form.Group className="mb-3">
          <Form.Label>Horario laboral y disponibilidad diaria</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="workingHours"
            placeholder="Ej: Trabajo de 8am a 5pm, alguien en casa por la tarde"
            value={formData.workingHours}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tiempo diario que podrías dedicarle a la mascota</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            name="dailyAvailability"
            placeholder="Ej: 2 horas de paseo + 4 horas de convivencia"
            value={formData.dailyAvailability}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Espacio exterior */}
        <Form.Group className="mb-3">
          <Form.Label>¿Cuentas con espacio exterior (patio/jardín)?</Form.Label>
          <Form.Select
            name="outdoorSpace"
            value={formData.outdoorSpace}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona...</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
            <option value="parcial">Espacio pequeño compartido</option>
          </Form.Select>
        </Form.Group>

        {/* Subida de foto */}
        <Form.Group className="mb-3">
          <Form.Label>Subir foto del hogar (opcional)</Form.Label>
          <Form.Control type="file" name="file" onChange={handleChange} />
        </Form.Group>

        {/* Botón */}
        <div className="text-center">
          <Button variant="success" type="submit" className="px-5">
            Enviar Información 🐶
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AdoptionForm;
