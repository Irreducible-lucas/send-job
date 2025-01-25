import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faLocationDot,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

import { jobDetails } from "../constant";
import { Job } from "../type";
import moment from "moment";

interface Props {
  job: Job;
  // handleNavigate: (val: Job) => void;
}

const JobDetailContent = ({ job }: Props) => {
  return (
    <div>
      <div className="space-y-6 ">
        {/* Job Header */}
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold mb-2">{job?.job_title}</h1>
            <div className="flex items-center space-x-3">
              {/* Apply Now Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>

              {/* Bookmark Icon */}
              <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="w-5 h-5 text-gray-600"
                />
              </button>

              {/* Share Icon */}
              <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition">
                <FontAwesomeIcon
                  icon={faShareAlt}
                  className="w-5 h-5 text-gray-600"
                />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <img
              src={job.employer_logo}
              className="w-16 h-16 rounded-full"
              alt="Company Logo"
            />
            <div>
              <div className="flex items-center gap-3">
                <p className="text-blue-500 text-sm">{job.employer_name}</p>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 h-4 text-gray-600"
                  />
                  <p className="text-sm">{job.job_city}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-xs font-medium text-blue-500 bg-blue-100 rounded">
                  {job.job_employment_type}
                </span>
                <span className="px-2 py-1 text-xs font-medium text-green-500 bg-green-100 rounded">
                  {job.job_is_remote ? "Remote" : "Onsite"}
                </span>
                <span className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded">
                  {job.experience}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <p className="mt-2 text-xs text-gray-500">{`${moment(
                  job.createdAt
                ).format("MMMM Do YYYY, h:mm:ss")}`}</p>
              </div>
              {/* <div className="flex gap-1 mt-[6px]">
                {jobDetails.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="text-black bg-gray-300 p-1 rounded-sm"
                  >
                    {tag}
                  </p>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* About Section */}
        <h2 className="text-xl font-semibold mb-3">About this role</h2>
        <p>{job.job_description}</p>

        {/* Qualifications */}
        <h2 className="text-xl font-semibold mb-3">Qualifications</h2>
        <ul className="list-disc pl-5">
          {jobDetails.qualifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Responsibilities */}
        <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
        <ul className="list-disc pl-5">
          {jobDetails.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {/* <FileList /> */}
    </div>
  );
};

export default JobDetailContent;
