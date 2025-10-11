import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import ImageComponent from "./ImageComponent";
import Link from "next/link";

const JobCard = ({ job }) => {
  return (
    <div className="job-card border rounded-lg shadow-md p-5 pt-8 mt-[40px] bg-white text-left relative flex flex-col min-h-80">        
    {
        job.CompanyLogo &&   
        <div className="flex items-center bg-white justify-center rounded-lg p-2 absolute h-[80px] w-[80px] -top-[40px] drop-shadow">
            <ImageComponent 
              strapiImage={job.CompanyLogo} 
              alt={job.Company || "Company logo"}
              loading="lazy"
              imgProps={{
                width: 60,
                height: 60,
                sizes: "60px"
              }} 
            />
        </div>
    }

        <div className="flex-grow">
            <h3 className="font-semibold text-lg mt-3">{job.Title}</h3>
            <p className="text-gray-500 font-medium">{job.Company}</p>

            <div className="flex items-center text-gray-500 text-sm mt-2">
                <MapPin size={16} className="mr-1" />
                {job.Location}
            </div>

            <p className="text-gray-600 text-sm mt-2">{job.Description}</p>        
        </div>
        
        <Link href={`/jobseekers/${job.documentId}`}>
            <button className="btn btn-primary  mt-3">Apply Now</button>
        </Link>
    </div>
  );
};

export default JobCard;
