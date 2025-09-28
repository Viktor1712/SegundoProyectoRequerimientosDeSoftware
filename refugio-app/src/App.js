import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import MascotaDetalle from "./pages/MascotaDetalle";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center mb-4">🐾 Refugio de Adopción</h1>
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/mascota/:id" element={<MascotaDetalle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
