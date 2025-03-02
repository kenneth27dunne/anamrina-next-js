'use client'

import React, { useState } from "react";
import JobListings from "../ui/JobListings";
import Categories from "../ui/Categories";
import SearchBar from "../ui/SearchBar";
import { searchJobListings } from "../../helpers/fetchHelper";

export default function JobListingsSection ({IncludeSearch, IncludeCategories, categoriesData, jobData = {data:{},meta:{}}}) {
  const [category, setCategory] = useState("All");
  const [jobs, setJobs] = useState(jobData);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  }; 

  const submitSearch = async () => {
    let result =  await searchJobListings(searchQuery);
    
    setJobs(result);
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">      
      { 
        IncludeSearch &&
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          submitSearch={submitSearch}
        />      
      }

      { 
        IncludeCategories && 
        <Categories
          categories={categoriesData.data}
          selectedCategory={category}
          setSelectedCategory={handleCategoryChange}
        />
      }
      
      <JobListings
        jobData={jobs}
        selectedCategory={category}
        searchQuery={searchQuery}
      />
    </section>
  );
};
