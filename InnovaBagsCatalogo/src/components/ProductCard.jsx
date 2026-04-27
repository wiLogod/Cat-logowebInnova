export default function ProductCard({ product, onProductClick }) {
  return (
    <div className="card">
      <img 
        src={product.image} 
        alt={product.name} 
        onClick={() => onProductClick(product)} 
      />
      <h3>{product.name}</h3>
      {/* <p>{product.description}</p> */}

      {/* Muestra los colores y stock disponibles */}
      {product.colors && (
        <div className="colors-container">
          {product.colors.map((c, index) => (
            <span key={index} className="color-badge">
              {c.name}: <b>{c.stock}</b>
            </span>
          ))}
        </div>
      )}

      <a
        href={`https://wa.me/51987006960?text=Hola, quiero info sobre ${product.name}`}
        target="_blank"
      >
        Consultar
      </a>
    </div>
  );
}