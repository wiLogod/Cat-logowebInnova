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