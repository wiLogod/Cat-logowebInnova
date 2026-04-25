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

      <a
        href={`https://wa.me/51999999999?text=Hola, quiero info sobre ${product.name}`}
        target="_blank"
      >
        Consultar
      </a>
    </div>
  );
}