import { useState, useEffect } from "react";
import { colorHex } from "./colors";

export default function ProductModal({ product, onClose }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center center", transform: "scale(1)" });

  // Función para cerrar la ventana y limpiar el color seleccionado
  const handleClose = () => {
    setSelectedColor("");
    onClose();
  };

  // Cerrar el modal al presionar la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Si no hay producto seleccionado, no renderiza nada
  if (!product) return null;

  // Obtenemos la URL pública de tu página web (Vercel) para que WhatsApp pueda mostrar la miniatura
  const baseUrl = window.location.origin;
  const fullImageUrl = new URL(product.image, baseUrl).href;

  const whatsappMessage = selectedColor
    ? `Hola, quiero info sobre *${product.name}* en color *${selectedColor}*.\n\nPuedes ver la foto aquí:\n${fullImageUrl}`
    : `Hola, quiero info sobre *${product.name}*.\n\nPuedes ver la foto aquí:\n${fullImageUrl}`;

  // Funciones para el efecto Lupa (Zoom dinámico)
  const handleZoom = (e) => {
    // Soporte para mouse (computadoras) y touch (celulares)
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2.2)" // Nivel de acercamiento (220%)
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transformOrigin: "center center", transform: "scale(1)" });
  };

  return (
    // Al hacer clic en el fondo oscuro, se cierra el modal
    <div className="modal-overlay" onClick={handleClose}>
      {/* e.stopPropagation() evita que el modal se cierre si hacemos clic adentro del cuadro blanco */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>X</button>
        
        <div className="modal-body">
          {/* Contenedor de la imagen con el rastreador de Lupa */}
          <div 
            className="image-zoom-container"
            onMouseMove={handleZoom}
            onTouchMove={handleZoom}
            onMouseLeave={handleMouseLeave}
            onTouchEnd={handleMouseLeave}
          >
            <img src={product.image} alt={product.name} style={zoomStyle} />
            <span className="lupa-hint">🔍 Pasa el mouse</span>
          </div>

          <div className="modal-info">
            <h2>{product.name}</h2>
            {/* Solo muestra la descripción si existe en los datos del producto */}
            {product.description && <p className="description">{product.description}</p>}
            
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
                    {c.name} {isOutOfStock && <b>(Agotado)</b>}
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