import { useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import ProductModal from "./components/ProductModal";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    category === "All"
      ? products
      : category === "Destacados"
      ? products.filter((p) => p.destacado)
      : products.filter((p) => p.category === category);

  return (
    <div>
      <Navbar />
      <Filters category={category} setCategory={setCategory} />
      {/* Pasamos la función para abrir el modal cuando se haga clic en un producto */}
      <ProductList products={filteredProducts} onProductClick={setSelectedProduct} />
      
      {/* El Modal siempre está presente, pero solo se muestra si selectedProduct tiene datos */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}

export default App;