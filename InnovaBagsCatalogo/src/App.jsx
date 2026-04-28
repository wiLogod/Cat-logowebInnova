import { useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";
import { products } from "./data/products";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12); // Mostrar 12 productos inicialmente

  const filteredProducts =
    category === "All"
      ? products
      : category === "Destacados"
      ? products.filter((p) => p.destacado)
      : products.filter((p) => p.category === category);

  // Función para cambiar de categoría y reiniciar la cuenta de productos
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setVisibleCount(12);
  };

  // Cortar la lista de productos para mostrar solo los visibles
  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12); // Cargar 12 más cada vez
  };

  const handleLoadLess = () => {
    setVisibleCount((prev) => Math.max(prev - 12, 12)); // Quitar 12, pero nunca bajar de 12
  };

  return (
    <div>
      <Navbar />
      <Filters category={category} setCategory={handleCategoryChange} />
      {/* Pasamos la función para abrir el modal cuando se haga clic en un producto */}
      <ProductList products={displayedProducts} onProductClick={setSelectedProduct} />
      
      {/* Botones Cargar Más y Cargar Menos */}
      {(visibleCount < filteredProducts.length || visibleCount > 12) && (
        <div className="load-more-container">
          {visibleCount > 12 && (
            <button className="load-more-btn load-less-btn" onClick={handleLoadLess}>Cargar menos</button>
          )}
          {visibleCount < filteredProducts.length && (
            <button className="load-more-btn" onClick={handleLoadMore}>Cargar más productos</button>
          )}
        </div>
      )}

      {/* El Modal siempre está presente, pero solo se muestra si selectedProduct tiene datos */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      {/* Botón flotante para subir */}
      <ScrollToTop />
    </div>
  );
}

export default App;