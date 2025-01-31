import { useState } from "react";
import { processJobs, processTabs } from "../constant";
import { FaMapMarkerAlt } from "react-icons/fa";
const ProcessJob = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="md:p-6 min-h-screen">
      <div className="flex space-x-3">
        {processTabs.map((tab) => (
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
        {processJobs
          .filter((job) => activeTab === "All" || job.status === activeTab)
          .map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-xl shadow-md border"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                      <img
                        src={job.image}
                        alt="Figma Logo"
                        className="w-8 h-8"
                      />
                    </div>
                  </div>
                  <div className="grid">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-gray-500">{job.salary}</p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    job.status === "Waiting"
                      ? "bg-gray-200 text-gray-600"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  Status: {job.status}
                </span>
              </div>

              <p className="font-semibold ">{job.company}</p>

              <p className="text-gray-400 flex items-center gap-1">
                <FaMapMarkerAlt className="text-gray-500" />
                {job.location}
              </p>

              <p className="mt-2 text-gray-600">Full time</p>

              {job.status === "Interview" && (
                <button className="mt-4 w-full flex items-center justify-center border border-blue-600 text-blue-600 py-2 rounded-lg">
                  📩 Interview Invitation
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProcessJob;
