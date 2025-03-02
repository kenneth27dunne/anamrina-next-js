import JobCard from "../ui/JobCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const JobListings = ({ jobData }) => {    
    
  const { total, page, pageCount, pageSize } = jobData.meta.pagination;
  const jobList = jobData.data;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {jobList.length > 0 ? (
          jobList.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center mt-6">
            No jobs found matching your search criteria.
          </p>
        )}
      </div>

      {/* Pagination */}      
        <div className="flex justify-center items-center gap-4 mt-8">
            <button
            className={`arrow left ${page === 1 && "opacity-50"}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            >
            <ArrowLeft />
            </button>
            <span className="text-lg font-semibold">
            Page {page} of {pageCount}
            </span>
            <button
            className={`arrow right ${page === pageCount && "opacity-50"}`}
            onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageCount))
            }
            disabled={page === pageCount}
            >
            <ArrowRight />
            </button>
        </div>      
    </>
  );
};

export default JobListings;
