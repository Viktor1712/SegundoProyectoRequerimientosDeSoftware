import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext"; // ✅ Importar el provider
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import MascotaDetalle from "./pages/MascotaDetalle";
import AdoptionForm from "./pages/AdoptionForm";
import ContactForm from "./pages/ContactForm";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <CarritoProvider> {/* ✅ Envolvemos toda la app */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/mascota/:id" element={<MascotaDetalle />} />
          <Route path="/adoptar" element={<AdoptionForm />} />
          <Route path="/adoptar/:id" element={<AdoptionForm />} />
          <Route path="/contacto" element={<ContactForm />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
