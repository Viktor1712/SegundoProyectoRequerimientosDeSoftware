import { useCarrito } from "../context/CarritoContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";

function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();
  const [seleccionadas, setSeleccionadas] = useState([]);
  const navigate = useNavigate();

  if (carrito.length === 0)
    return (
      <Container className="mt-5 text-center">
        <h2 className="mb-4">🛒 Tu carrito está vacío</h2>
        <Link to="/catalogo" className="btn btn-primary btn-lg">
          Ver catálogo
        </Link>
      </Container>
    );

  const toggleSeleccionada = (id) => {
    if (seleccionadas.includes(id)) {
      setSeleccionadas(seleccionadas.filter((sid) => sid !== id));
    } else {
      setSeleccionadas([...seleccionadas, id]);
    }
  };

  const continuarAdopcion = () => {
    if (seleccionadas.length === 0) return;
    navigate(`/adoptar?ids=${seleccionadas.join(",")}`);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center" style={{ color: "#6c5ce7" }}>
        🛒 Tu carrito de adopciones
      </h2>

      <Row className="g-3">
        {carrito.map((m) => (
          <Col md={4} key={m.id}>
            <Card className="h-100 shadow-sm rounded-4">
              <Form.Check
                type="checkbox"
                className="m-2"
                label="Seleccionar para adopción"
                checked={seleccionadas.includes(m.id)}
                onChange={() => toggleSeleccionada(m.id)}
              />
              <Card.Img
                variant="top"
                src={m.fotoPortada}
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{m.nombre}</Card.Title>
                <Card.Text>
                  {m.especie} - {m.tamaño}
                </Card.Text>
                <div className="mt-auto d-flex justify-content-between">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => {
                      eliminarDelCarrito(m.id);
                      setSeleccionadas(seleccionadas.filter((id) => id !== m.id));
                    }}
                  >
                    🗑 Quitar
                  </Button>
                  <span className="text-muted">{m.ubicacion}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-end mt-4 gap-2">
        <Button
          variant="danger"
          onClick={vaciarCarrito}
          style={{ boxShadow: "0 3px 6px rgba(0,0,0,0.2)" }}
        >
          Vaciar carrito
        </Button>
        <Button
          variant="success"
          onClick={continuarAdopcion}
          disabled={seleccionadas.length === 0}
          style={{
            background: "linear-gradient(90deg, #6c5ce7, #a29bfe)",
            border: "none",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
          }}
        >
          Continuar con adopción ❤️
        </Button>
      </div>
    </Container>
  );
}

export default Carrito;
