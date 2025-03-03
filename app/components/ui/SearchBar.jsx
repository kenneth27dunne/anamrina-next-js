'use client'
import { Search } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SearchBar = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    const [searchQuery, setSearchQuery] = useState(searchParams.get('s') ?? "");

    useEffect(() => {
        setSearchQuery(searchParams.get('s') ?? "");
    }, [searchParams]);

    const submitSearch = () => { 
        const params = new URLSearchParams(searchParams.toString());

        if (searchQuery) {
            params.set("s", searchQuery);
        } else {
            params.delete("s"); 
        }
        params.set("pn", 1);

        router.push(`${pathname}?${params.toString()}`);
    }

    return (
    <>
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
        className="hidden xs:inline-block btn btn-primary"
        onClick={submitSearch}>
        Search
        </button>
    </div>
    <div className="inline-block xs:hidden mt-2">
    <button
        className="btn btn-primary"
        onClick={submitSearch}>
        Search
        </button>
    </div>
    </>
    );
};

export default SearchBar;
