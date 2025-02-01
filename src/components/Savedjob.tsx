import { useState } from "react";
import { savedJobs, savedTabs } from "../constant";
import { FaBookmark, FaBriefcase, FaTrashAlt } from "react-icons/fa";

const SavedJob = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="md:p-6 min-h-screen">
      <div className="flex space-x-3">
        {savedTabs.map((tab) => (
          <button
            key={tab.label}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === tab.label
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {savedJobs
          .filter((job) => activeTab === "All" || job.status === activeTab)
          .map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-xl shadow-md border"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-gray-500">{job.salary}</p>
                  <p className="text-gray-500">{job.company}</p>
                  <p className="text-gray-400">{job.location}</p>
                </div>

                <FaBookmark className="text-blue-600 text-lg md:text-xl" />
              </div>

              <p className="mt-2 text-gray-600">Full time</p>

              <div className="flex space-x-4 mt-4">
                <button className="w-full flex items-center justify-center border border-blue-600 text-blue-600 py-2 rounded-lg">
                  <FaBriefcase className="mr-2" />
                  Apply Now
                </button>
                <button className="w-full flex items-center justify-center border border-gray-600 text-gray-600 py-2 rounded-lg">
                  <FaTrashAlt className="mr-2" />
                  Remove from Saved
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SavedJob;
