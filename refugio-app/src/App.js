import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import MascotaDetalle from "./pages/MascotaDetalle";
import AdoptionForm from "./pages/AdoptionForm";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/mascota/:id" element={<MascotaDetalle />} />
        <Route path="/adoptar" element={<AdoptionForm />} />
        <Route path="/adoptar/:id" element={<AdoptionForm />} />
        <Route path="/contacto" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
