const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
    return (
      <>
        <h3 className="text-3xl mt-6 font-semibold text-left">
          Browse Jobs by Category
        </h3>
  
        <div className="flex flex-wrap gap-2 mt-6">
            <button onClick={() => setSelectedCategory("All")} 
              className={`category-btn ${
                selectedCategory === "All" ? "bg-primary text-white" : "bg-gray-200"
              } px-4 py-2 rounded-full`} >
              All
            </button>
          {categories.map((cat) => (
            <button
              key={cat.documentId}
              className={`category-btn ${
                selectedCategory === cat.Title ? "bg-primary text-white" : "bg-gray-200"
              } px-4 py-2 rounded-full`}
              onClick={() => setSelectedCategory(cat.Title)}
            >
              {cat.Title}
            </button>
          ))}
        </div>
      </>
    );
  };
  
  export default Categories;
  