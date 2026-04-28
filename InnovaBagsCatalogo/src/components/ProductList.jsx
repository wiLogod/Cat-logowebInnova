import ProductCard from "./ProductCard";

export default function ProductList({ products, onProductClick }) {
  return (
    <div className="grid">
      {products?.map((p) => (
        <ProductCard key={p.id} product={p} onProductClick={onProductClick} />
      ))}
    </div>
  );
}