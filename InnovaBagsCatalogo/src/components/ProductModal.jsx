export default function ProductModal({ product, onClose }) {
  // Si no hay producto seleccionado, no renderiza nada
  if (!product) return null;

  return (
    // Al hacer clic en el fondo oscuro, se cierra el modal
    <div className="modal-overlay" onClick={onClose}>
      {/* e.stopPropagation() evita que el modal se cierre si hacemos clic adentro del cuadro blanco */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        
        <div className="modal-body">
          <img src={product.image} alt={product.name} />
          <div className="modal-info">
            <h2>{product.name}</h2>
            <p className="description">{product.description}</p>
            
            {/* Muestra los colores en la ventana del producto */}
            {product.colors && (
              <div className="colors-container" style={{ marginBottom: "1.5rem" }}>
                {product.colors.map((c, index) => (
                  <span key={index} className="color-badge" style={{ fontSize: "0.9rem", padding: "0.3rem 0.6rem" }}>
                    {c.name}: <b>{c.stock}</b>
                  </span>
                ))}
              </div>
            )}

            <a
              href={`https://wa.me/51999999999?text=Hola, quiero info sobre ${product.name}`}
              target="_blank"
              className="whatsapp-btn"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}