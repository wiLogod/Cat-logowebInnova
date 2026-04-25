export default function Filters({ category, setCategory }) {
  const categories = ["All", "Destacados", "Bolsos", "Mochilas", "Carteras", "Morrales", "Billeteras"];
  

  return (
    <div className="filters">
      {categories.map((cat) => (
        <button 
          key={cat} 
          onClick={() => setCategory(cat)}
          className={category === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}