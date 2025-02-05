import { useState } from "react";
import { FaTrashAlt, FaBriefcase, FaPlus } from "react-icons/fa";
import { companyJobs as initialJobs } from "../constant";
import JobAdModal from "./JobAdModal"; // Import the modal component

const CompanySavedDraft = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [editingJob, setEditingJob] = useState(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false); // State for Job Modal

  // Function to add a new job
  const addJob = (newJob) => {
    setJobs([...jobs, { id: Date.now(), ...newJob }]); // Add new job
    setIsJobModalOpen(false); // Close the modal after adding job
  };

  const updateJob = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
    setEditingJob(null);
  };

  const deleteJob = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

  return (
    <div className="md:p-6 min-h-screen">
      {/* Draft jobs list */}
      <div className="mt-6 grid gap-4">
        {jobs.map((job) => (
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
                    Created at {job.postedDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700 text-sm">
                {job.applicants} Applicant{job.applicants !== 1 ? "s" : ""}
              </span>
              <button className="text-blue-600 text-sm font-semibold hover:underline">
                Promote Job?
              </button>
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
                onClick={() => setEditingJob(job)}
                className="flex items-center justify-center border-[1px] rounded-xl py-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaBriefcase className="mr-2" /> Edit Draft
              </button>
              <button
                onClick={() => deleteJob(job.id)}
                className="flex items-center justify-center border-[1px] rounded-xl py-2 border-red-500 text-red-500 hover:bg-red-600 hover:text-white"
              >
                <FaTrashAlt className="mr-2" /> Delete Draft
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Job Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setIsJobModalOpen(true)} // Open the modal
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          <FaPlus className="mr-2" /> Add Job
        </button>
      </div>

      {/* Job Posting Modal */}
      {isJobModalOpen && (
        <JobAdModal onSave={addJob} onClose={() => setIsJobModalOpen(false)} />
      )}

      {/* Edit Job Form (Visible when editingJob is set) */}
      {editingJob && (
        <div className="bg-white p-6 mt-6 rounded-2xl shadow-md">
          <EditJobForm
            job={editingJob}
            onSave={updateJob}
            onClose={() => setEditingJob(null)}
          />
        </div>
      )}
    </div>
  );
};

// Edit Job Form Component
const EditJobForm = ({ job, onSave, onClose }) => {
  const [formData, setFormData] = useState(job);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (!formData.title.trim()) {
      alert("Job title cannot be empty.");
      return;
    }
    onSave(formData);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Edit Job Draft</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        placeholder="Job Title"
      />
      <div className="flex gap-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          Save Changes
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CompanySavedDraft;
