import React from "react";
import { JobDetailSidebarProps } from "../type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

interface JobSideNavCardProps {
  job: JobDetailSidebarProps;
}

const JobSideNavCard: React.FC<JobSideNavCardProps> = ({ job }) => {
  return (
    <div className="flex p-4 border rounded-lg shadow-sm space-x-4">
      {/* Company Logo */}
      <img
        src={job.logo}
        alt={`${job.company} logo`}
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Job Information */}
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="text-sm text-gray-500">{`${job.company} • ${job.location}`}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-2 py-1 text-xs font-medium text-blue-500 bg-blue-100 rounded">
            {job.type}
          </span>
          <span className="px-2 py-1 text-xs font-medium text-green-500 bg-green-100 rounded">
            {job.mode}
          </span>
          <span className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded">
            {job.experience}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <p className="mt-2 text-xs text-gray-500">{`${job.posted}`}</p>
          <p className="mt-2 text-xs text-gray-500">{`•  ${job.applicants} Applicants`}</p>
        </div>
      </div>

      {/* Bookmark Icon */}
      <button
        className="self-start text-gray-500 hover:text-blue-500"
        aria-label="Bookmark Job"
      >
        <FontAwesomeIcon icon={faBookmark} />
      </button>
    </div>
  );
};

export default JobSideNavCard;
