import { useState } from "react";
import { FaBriefcase, FaEye, FaPlus } from "react-icons/fa";
import { companySavedJobs as initialJobs } from "../constant";
import JobAdModal from "./JobAdModal"; // Import the modal component

export const CompanyTab = [
  { label: "All", count: initialJobs.length },
  { label: "Active", count: initialJobs.filter((job) => job.isActive).length },
  {
    label: "Inactive",
    count: initialJobs.filter((job) => !job.isActive).length,
  },
];

const CompanyJobs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [jobs, setJobs] = useState(initialJobs);
  const [isAddingJob, setIsAddingJob] = useState(false);

  const toggleJobStatus = (id: any) => {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, isActive: !job.isActive } : job
      )
    );
  };

  const viewJob = (job: any) => {
    console.log("Viewing job:", job);
  };

  // Function to handle adding a new job
  const addJob = (newJob: any) => {
    setJobs([...jobs, { id: Date.now(), ...newJob }]);
    setIsAddingJob(false); // Close the modal after adding the job
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Tabs */}
      <div className="grid gap-4 grid-cols-3 mb-6">
        {CompanyTab.map((tab) => (
          <button
            key={tab.label}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === tab.label
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label} (
            {
              jobs.filter(
                (job) =>
                  tab.label === "All" ||
                  (tab.label === "Active" ? job.isActive : !job.isActive)
              ).length
            }
            )
          </button>
        ))}
      </div>

      {/* Job List */}
      <div className="grid grid-cols-3 gap-4">
        {jobs
          .filter(
            (job) =>
              activeTab === "All" ||
              (activeTab === "Active" ? job.isActive : !job.isActive)
          )
          .map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-2xl shadow-md border"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <img src={job.image} alt="Logo" className="w-10 h-10" />
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-500">
                      Created at {job.createdAt}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 text-sm">
                  {job.applicants} Applicant{job.applicants !== 1 ? "s" : ""}
                </span>
                <span className="text-gray-700 text-sm flex items-center">
                  <FaEye className="mr-1" /> {job.views} Views
                </span>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    job.isActive
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {job.isActive ? "Active" : "Inactive"}
                </span>
              </div>
              <div className="grid grid-cols-2 mt-5 gap-5">
                <button
                  className="border-[1px] rounded-xl py-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white flex items-center justify-center"
                  onClick={() => toggleJobStatus(job.id)}
                >
                  <FaBriefcase className="mr-2" />
                  {job.isActive ? "Close Job" : "Reopen Job"}
                </button>
                <button
                  className="border-[1px] rounded-xl py-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white"
                  onClick={() => viewJob(job)}
                >
                  View Job
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CompanyJobs;
