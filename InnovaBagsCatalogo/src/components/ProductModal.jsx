import { useState } from "react";
import { colorHex } from "./colors";

export default function ProductModal({ product, onClose }) {
  const [selectedColor, setSelectedColor] = useState("");

  // Función para cerrar la ventana y limpiar el color seleccionado
  const handleClose = () => {
    setSelectedColor("");
    onClose();
  };

  // Si no hay producto seleccionado, no renderiza nada
  if (!product) return null;

  const whatsappMessage = selectedColor
    ? `Hola, quiero info sobre ${product.name} en color ${selectedColor}. Imagen: ${product.image}`
    : `Hola, quiero info sobre ${product.name}. Imagen: ${product.image}`;

  return (
    // Al hacer clic en el fondo oscuro, se cierra el modal
    <div className="modal-overlay" onClick={handleClose}>
      {/* e.stopPropagation() evita que el modal se cierre si hacemos clic adentro del cuadro blanco */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>X</button>
        
        <div className="modal-body">
          <img src={product.image} alt={product.name} />
          <div className="modal-info">
            <h2>{product.name}</h2>
            <p className="description">{product.description}</p>
            
            {/* Muestra los colores en la ventana del producto */}
            {product.colors && (
              <div className="colors-container" style={{ marginBottom: "1.5rem" }}>
              {product.colors.map((c, index) => {
                const stockNum = Number(c.stock);
                const isOutOfStock = stockNum === 0;
                const isLowStock = stockNum > 0 && stockNum < 10;

                return (
                  <span 
                    key={index} 
                    className={`color-badge ${isOutOfStock ? "out-of-stock" : ""} ${isLowStock ? "low-stock" : ""} ${selectedColor === c.name ? "selected" : ""}`} 
                    style={{ fontSize: "0.9rem", padding: "0.3rem 0.6rem" }}
                    onClick={() => !isOutOfStock && setSelectedColor(selectedColor === c.name ? "" : c.name)}
                  >
                    <span 
                      className="color-bubble" 
                      style={{ backgroundColor: colorHex[c.name] || "#e5e7eb" }}
                    ></span>
                    {c.name}: <b>{isOutOfStock ? "Agotado" : stockNum}</b>
                    {isLowStock && " 🔥"}
                  </span>
                );
              })}
              </div>
            )}

            <a
              href={`https://wa.me/51987006960?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              className="whatsapp-btn"
              rel="noopener noreferrer"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}