'use client'
import { Search } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
  const [searchQuery, setSearchQuery] = useState(searchParams.get('s') ?? "");


  const submitSearch = () => { 
    // Create a new URLSearchParams object with existing parameters
    const params = new URLSearchParams(searchParams.toString());

    // Update the "s" parameter
    if (searchQuery) {
      params.set("s", searchQuery);
    } else {
      params.delete("s"); // Remove 's' if empty
    }

    // Update the URL without a full page reload
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex items-center border rounded-lg p-3 shadow-sm">
      <Search className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search jobs..."
        className="outline-none w-full p-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submitSearch()}
      />
      <button
        className="btn btn-primary"
        onClick={submitSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
