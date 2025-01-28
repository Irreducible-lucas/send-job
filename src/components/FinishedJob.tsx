import { useState } from "react";
import { finishJobs, finishTabs } from "../constant";

const FinishedJob = () => {
  const [activeTab, setActiveTab] = useState("All");

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
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {finishJobs
          .filter((job) => activeTab === "All" || job.status === activeTab)
          .map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-xl shadow-md border flex items-center space-x-4"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png"
                  alt="Figma Logo"
                  className="w-8 h-8"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-gray-500">{job.salary}</p>
                <p className="text-gray-500">{job.company}</p>
                <p className="text-gray-400">{job.location}</p>
              </div>

              <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-500 text-white">
                Status: {job.status}
              </span>

              <p className="text-gray-600">Full time</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FinishedJob;
