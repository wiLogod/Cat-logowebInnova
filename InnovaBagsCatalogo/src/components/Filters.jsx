export default function Filters({ category, setCategory }) {
  const categories = ["All", "Destacados", "Carteras", "Morrales", "Mochilas", "SETX4", "SETX5", "Etiquetas"];
  

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