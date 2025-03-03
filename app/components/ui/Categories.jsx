'use client'
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Categories = ({ categories }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [category, setCategory] = useState(searchParams.get('cat') ?? "All");

    useEffect(() => {
        setCategory(searchParams.get('cat') ?? "All");
    }, [searchParams]);
  
    const handleCategoryChange = (selectedCategory) => {
        const params = new URLSearchParams(searchParams.toString());

        if(!selectedCategory || selectedCategory === undefined || selectedCategory === "All") {
            params.delete("cat"); 
        } else {
            params.set("cat", selectedCategory);
        }

        router.push(`${pathname}?${params.toString()}`);
    }; 

    return (
      <>
        <h3 className="text-3xl mt-6 font-semibold text-left">
          Browse Jobs by Category
        </h3>
  
        <div className="flex flex-wrap gap-2 mt-6">
            <button onClick={() => handleCategoryChange("All")} 
              className={`category-btn ${
                category === "All" ? "bg-primary text-white" : "bg-gray-200"
              } px-4 py-2 rounded-full`} >
              All
            </button>
          {categories.map((cat) => (
            <button
              key={cat.documentId}
              className={`category-btn ${
                category === cat.Title ? "bg-primary text-white" : "bg-gray-200"
              } px-4 py-2 rounded-full`}
              onClick={() => handleCategoryChange(cat.Title)}
            >
              {cat.Title}
            </button>
          ))}
        </div>
      </>
    );
  };
  
  export default Categories;
  