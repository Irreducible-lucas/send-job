import { useState } from "react";
import { savedTabs } from "../constant";
import {
  FaBookmark,
  FaBriefcase,
  FaTrashAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useGetSavedJobsQuery, useSaveJobMutation } from "../rtk/services/jobs";
import { Job } from "../type";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SavedJob = () => {
  const [activeTab, setActiveTab] = useState("All");

  const { data, isLoading } = useGetSavedJobsQuery("", {
    refetchOnFocus: true,
  });

  const savedJobs: Job[] = data?.data || [];

  let navigate = useNavigate();

  const handleNavigate = (item: Job) => {
    navigate(`/jobs/${item.job_title}`, {
      state: { state: item },
    });
  };

  const [saveJob] = useSaveJobMutation();

  const onSaveJob = async (job: Job) => {
    const data: any = {
      jobId: job.jobId,
      userId: 1,
    };

    let response: any = await saveJob(data);

    if (response?.data) {
      if (response.data.message === "Job removed from saved jobs") {
        toast.success("Job removed from saved job");
        return;
      }
      toast.success("Job saved");
    } else {
      console.log(response.error);
      toast.error("Unable to save Job");
      // setErrorMessage('Error saving quote');
    }
  };

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
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                    <img
                      src={job.employer_logo}
                      alt="Figma Logo"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="grid">
                    <h3 className="font-semibold text-lg">{job.job_title}</h3>
                    <p className="text-gray-500">
                      {job.job_salary_currency + " " + job.job_max_salary}
                    </p>
                  </div>
                </div>

                <FaBookmark className="text-blue-600 text-lg md:text-xl" />
              </div>

              <p className="font-semibold">{job.employer_name}</p>

              <p className="text-gray-400 flex items-center">
                <FaMapMarkerAlt className="mr-1" /> {job.job_city}
              </p>

              <p className="mt-2 text-gray-600">Full time</p>

              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => {
                    handleNavigate(job);
                  }}
                  className="w-full flex items-center justify-center border border-blue-600 text-blue-600 py-2 rounded-lg"
                >
                  <FaBriefcase className="mr-2" />
                  Apply Now
                </button>
                <button
                  onClick={() => {
                    onSaveJob(job);
                  }}
                  className="w-full flex items-center justify-center border border-gray-600 text-gray-600 py-2 rounded-lg"
                >
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
