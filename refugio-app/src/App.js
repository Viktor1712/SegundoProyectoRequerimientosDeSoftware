import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";   // 👈 Importa tu Catalogo.js real
import MascotaDetalle from "./pages/MascotaDetalle";

// ⚠️ Páginas de ejemplo que luego puedes reemplazar:
function Adoptar() {
  return (
    <div className="container mt-5">
      <h2>Formulario de adopción 🐾</h2>
    </div>
  );
}

function Contacto() {
  return (
    <div className="container mt-5">
      <h2>Contáctanos 📩</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />   {/* ✅ Usa tu Catalogo */}
        <Route path="/adoptar" element={<Adoptar />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/mascota/:id" element={<MascotaDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
