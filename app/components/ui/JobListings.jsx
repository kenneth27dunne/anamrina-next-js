'use client'
import JobCard from "../ui/JobCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";  
import { useEffect, useState } from "react";

const JobListings = ({ jobData }) => {    
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    
    const setCurrentPage = (pageNumber) => { 
        const params = new URLSearchParams(searchParams.toString());
        params.set("pn", pageNumber);
        
        router.push(`${pathname}?${params.toString()}`);
    }
    
    const [jobList, setJobList] = useState(jobData.data);
    const [meta, setMeta] = useState(jobData.meta);
    
    const { total, page, pageCount, pageSize } = meta.pagination;

    useEffect(() => {
        setJobList(jobData.data)
        setMeta(jobData.meta)
    }, [jobData]);

  return (
    <>
      <div className="sm:text-right mt-6">{total} result{total === 1? "" : "s"} found</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobList.length > 0 ? (
          jobList.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center mt-6">
            No jobs found matching your search criteria.
          </p>
        )}
      </div>

      {/* Pagination */}  
      {
        jobList.length > 0 
        && (    
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                className={`arrow left ${page === 1 && "opacity-50"}`}
                onClick={() => setCurrentPage(Math.max(page - 1, 1))}
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
                    setCurrentPage(Math.min(page + 1, pageCount))
                }
                disabled={page === pageCount}
                >
                <ArrowRight />
                </button>
            </div>    
            )
        }  
    </>
  );
};

export default JobListings;
