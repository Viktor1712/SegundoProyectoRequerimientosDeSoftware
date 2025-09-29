import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import MascotaDetalle from "./pages/MascotaDetalle";
import AdoptionForm from "./pages/AdoptionForm";   // 👈 importa el formulario real
import ContactForm from "./pages/ContactForm";     // 👈 importa el formulario real

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/adoptar" element={<AdoptionForm />} />   {/* ✅ aquí va el form de adopción */}
        <Route path="/contacto" element={<ContactForm />} />   {/* ✅ aquí va el form de contacto */}
        <Route path="/mascota/:id" element={<MascotaDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
