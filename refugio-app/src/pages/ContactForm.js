import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de contacto:", formData);
    alert("✅ Formulario de contacto enviado con éxito");
  };

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg rounded-4" style={{ backgroundColor: "#fdf6f0" }}>
        <h2 className="mb-4 text-center" style={{ color: "#6c5ce7" }}>
          📩 Contáctanos
        </h2>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Nombre completo</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="shadow-sm rounded-3"
                  placeholder="Tu nombre completo"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow-sm rounded-3"
                  placeholder="ejemplo@correo.com"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="shadow-sm rounded-3"
                  placeholder="Ej: +506 8888-8888"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Dirección</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="shadow-sm rounded-3"
                  placeholder="Calle, ciudad, país"
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center mt-4">
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
              Enviar Mensaje ✉️
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default ContactForm;
