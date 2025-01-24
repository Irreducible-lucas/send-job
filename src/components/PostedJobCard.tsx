import React from "react";
import { Job } from "../type";

interface JobCardProps {
  job: Job;
}

const PostedJobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <img
          src={job.companyLogo}
          alt={job.companyName}
          className="w-10 h-10 object-contain"
        />
        <span className="text-blue-600 font-semibold">{job.salary}</span>
      </div>
      <div className="mt-4">
        <p className="text-gray-500 text-sm">{job.location}</p>
        <a
          href="#"
          className="text-blue-500 text-sm font-medium hover:underline"
        >
          {job.companyName}
        </a>
        <h3 className="text-gray-800 font-semibold mt-2 truncate">
          {job.jobTitle}
        </h3>
      </div>
      <div className="flex items-center text-gray-500 text-sm mt-4 space-x-2">
        <p>{job.jobType}</p>
        <span>•</span>
        <p>{job.postTime}</p>
      </div>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {job.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center mt-4">
          {job.applicants.profilePictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt={`Applicant ${index + 1}`}
              className="w-8 h-8 rounded-full border-2 border-white -ml-2"
            />
          ))}
          <span className="text-gray-600 text-sm ml-2">
            +{job.applicants.total}
          </span>
        </div>
        <a
          href="#"
          className=" text-blue-500  hover:border-b-[1px] border-red-500 border-dotted  "
        >
          Apply Job
        </a>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        {job.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostedJobCard;
