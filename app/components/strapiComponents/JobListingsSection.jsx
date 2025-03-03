import JobListings from "../ui/JobListings";
import Categories from "../ui/Categories";
import SearchBar from "../ui/SearchBar";

export default function JobListingsSection ({IncludeSearch, IncludeCategories, categoriesData, jobData = {data:{},meta:{}}}) {

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">      
      { 
        IncludeSearch &&
        <SearchBar />      
      }

      { 
        IncludeCategories && 
        <Categories
          categories={categoriesData.data}
        />
      }
      
      <JobListings jobData={jobData} />
    </section>
  );
};
