import React from "react";
import { Job } from "../type";
import moment from "moment";

interface JobCardProps {
  job: Job;
}

const PostedJobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <img
          src={job.employer_logo}
          alt={job.employer_name}
          className="w-10 h-10 object-contain"
        />
        <span className="text-blue-600 font-semibold">
          {job.job_salary_currency + " " + job.job_min_salary}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-gray-500 text-sm">{job.job_city}</p>
        <a
          href="#"
          className="text-blue-500 text-sm font-medium hover:underline"
        >
          {job.employer_name}
        </a>
        <h3 className="text-gray-800 font-semibold mt-2 truncate">
          {job.job_title}
        </h3>
      </div>
      <div className="flex items-center text-gray-500 text-sm mt-4 space-x-2">
        <p>{job.job_employment_type}</p>
        <span>•</span>
        <p>{moment(job.createdAt).format("MMMM Do YYYY, h:mm:ss")}</p>
      </div>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {job.job_description}
      </p>
      <div className="flex items-center justify-between">
        {/* <div className="flex items-center mt-4">
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
        </div> */}
        <a
          href="#"
          className=" text-blue-500  hover:border-b-[1px] border-red-500 border-dotted  "
        >
          Apply Job
        </a>
      </div>
      {/* <div className="flex flex-wrap gap-2 mt-6">
        {job.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default PostedJobCard;
