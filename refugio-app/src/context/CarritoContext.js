import { createContext, useContext, useState } from "react";

// Creamos el contexto
const CarritoContext = createContext();

// Hook para usarlo fácilmente
export function useCarrito() {
  return useContext(CarritoContext);
}

// Proveedor del contexto
export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (mascota) => {
    // Evitar duplicados
    setCarrito((prev) => {
      if (prev.find((item) => item.id === mascota.id)) return prev;
      return [...prev, mascota];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((m) => m.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
