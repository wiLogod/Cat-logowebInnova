import { useState, memo } from "react";
import { colorHex } from "./colors";

const ProductCard = memo(function ProductCard({ product, onProductClick }) {
  const [selectedColor, setSelectedColor] = useState("");

  // Obtenemos la URL pública de tu página web (Vercel) para que WhatsApp pueda mostrar la miniatura
  const baseUrl = window.location.origin;
  const fullImageUrl = new URL(product.image, baseUrl).href;

  const whatsappMessage = selectedColor
    ? `Hola, quiero info sobre *${product.name}* en color *${selectedColor}*.\n\nPuedes ver la foto aquí:\n${fullImageUrl}`
    : `Hola, quiero info sobre *${product.name}*.\n\nPuedes ver la foto aquí:\n${fullImageUrl}`;

  return (
    <div className="card">
      <img 
        src={product.image} 
        alt={product.name} 
        onClick={() => onProductClick(product)}
        loading="lazy"
        decoding="async"
        style={{ backgroundColor: '#f0f0f0', minHeight: '200px', display: 'block' }}
      />
      <h3>{product.name}</h3>

      {product.colors && (
        <div className="colors-container">
          {product.colors.map((c, index) => {
            const stockNum = Number(c.stock);
            const isOutOfStock = stockNum === 0;
            const isLowStock = stockNum > 0 && stockNum < 10;
            
            return (
              <span 
                key={index} 
                className={`color-badge ${isOutOfStock ? "out-of-stock" : ""} ${isLowStock ? "low-stock" : ""} ${selectedColor === c.name ? "selected" : ""}`}
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
        rel="noopener noreferrer"
      >
        Consultar
      </a>
    </div>
  );
});

export default ProductCard;