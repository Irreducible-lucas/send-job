import { useState } from "react";
import { finishJobs, finishTabs } from "../constant";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useGetMyApplicationsQuery } from "../rtk/services/application";
import { Job } from "../type";

const FinishedJob = () => {
  const [activeTab, setActiveTab] = useState("All");

  const { data, isLoading } = useGetMyApplicationsQuery("", {});

  const finishedJobs: Job[] = data?.data || [];

  return (
    <div className="md:p-6 min-h-screen">
      <div className="flex space-x-3">
        {finishTabs.map((tab) => (
          <button
            key={tab.label}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === tab.label
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
            {/* ({activeTab === "All" ? finishJobs.length : tab.count}) */}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {finishedJobs
          .filter((job) => activeTab === "All" || job.status === activeTab)
          .map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-xl shadow-md border  space-x-4"
            >
              {/* Logo */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-5 mb-2">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                    <img
                      src={job.employer_logo}
                      alt="Figma Logo"
                      className="w-full h-full rounded-full"
                    />
                  </div>

                  {/* Job Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-lg">{job.job_title}</h3>
                    </div>
                    <p className="text-gray-500">$ {job.job_max_salary}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-500 text-white -mt-7">
                  Status: {job.status}
                </span>
              </div>
              <p className="font-semibold">{job.employer_name}</p>

              {/* Job Location */}
              <div className="flex items-center justify-between">
                <p className="text-gray-400 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-500" />
                  {job.job_city}
                </p>

                <p className="text-black px-5 py-1 bg-gray-300 rounded-full">
                  {job.job_employment_type}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FinishedJob;
