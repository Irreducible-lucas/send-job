import { useState } from "react";
import { FaBoxOpen, FaBriefcase } from "react-icons/fa";
import { useAppDispatch } from "../rtk/hooks";
import { setEmpJobDetailsModalOpen, setJobInfo } from "../rtk/features/user/jobSlice";
import { useUpdateJobInfoMutation } from "../rtk/services/jobs";
import { toast } from "react-toastify";

export const CompanyTab = [
  { label: "All" },
  { label: "Active" },
  {
    label: "Inactive",
  },
];

const CompanyJobs = ({ jobs, isLoading: isLoadingJobs }: any) => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState("All");
  const [updateJob, { isLoading }] = useUpdateJobInfoMutation();

  const viewJob = (job: any) => {
    dispatch(setJobInfo(job))
    dispatch(setEmpJobDetailsModalOpen(true))
  };

  // Function to handle adding a new job
  const closeJob = async (jobId: any) => {
    try {
      await updateJob({ id: jobId, data: { closed: true } });
      toast.success(`Job successfully closed`);
    } catch (error) {
      toast.error("Error occured while closing jobs");
    }
  };

  const reOpenJob = async (jobId: any) => {
    try {
      await updateJob({ id: jobId, data: { closed: false } });
      toast.success(`Job successfully reopened`);
    } catch (error) {
      toast.error("Error occured while reopening jobs");
    }
  };

  if (isLoadingJobs) {
    return (<div>Loading posted jobs, please wait...</div>)
  }

  return (
    <div className="p-6 min-h-screen">
      {/* Tabs */}
      <div className="grid gap-4 grid-cols-3 mb-6">
        {CompanyTab.map((tab) => (
          <button
            key={tab.label}
            className={`px-4 py-2 rounded-lg font-medium ${activeTab === tab.label
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
              }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {jobs?.length === 0 && (<div className="bg-white rounded-lg w-full grid place-items-center text-center p-8 mt-8 gap-3">
        <FaBoxOpen size={100} className="text-blue-600" />
        <h3>No posted job at the moment</h3>
        <p>Click on the <span className="font-bold">Add Job Button</span> at the bottom right corner to create a new Job</p>
      </div>)}

      {/* Job List */}
      <div className="grid grid-cols-3 gap-4">
        {jobs
          .filter(
            (job: any) =>
              activeTab === "All" ||
              (activeTab === "Active" ? !job?.closed : job?.closed)
          )
          .map((job: any) => (
            <div
              key={job?.id}
              className="bg-white p-4 rounded-2xl shadow-md border"
            >
              <div className="flex gap-3 mb-4">
                <div>
                  {job?.company_logo_url === "" ? (<div className="h-10 w-10 rounded-full grid place-items-center bg-blue-700">
                    <FaBriefcase className="text-white" size={30} />
                  </div>) : (<img src={job?.company_logo_url} alt="Logo" className="w-10 h-10 rounded-full" />)}
                </div>
                {/* <img src={job?.image} alt="Logo" className="w-10 h-10" /> */}
                <div>
                  <h3 className="text-lg font-semibold">{job?.job_title}</h3>
                  <p className="text-sm text-gray-500">
                    Created at {job?.createdAt}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-gray-700 text-sm">
                  {job?.job_employment_type}
                </div>

                <div
                  className={`text-sm px-3 py-1 rounded-full ${!job?.closed
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                    }`}
                >
                  {!job?.closed ? "Active" : "Inactive"}
                </div>
              </div>
              <div className="flex mt-6 gap-4">
                {job?.closed ? (
                  <button
                  className={`flex-1 border-[1px] rounded-lg py-2 flex items-center justify-center border-green-500 text-green-500 hover:bg-green-600 hover:text-white`}
                  onClick={() => reOpenJob(job?.id)}
                >
                  <FaBriefcase className="mr-2" />
                  <p>{isLoading ? "reopening..." : "Reopen Job"}</p>
                </button>
                ) : (
                  <button
                  className={`flex-1 border-[1px] rounded-lg py-2 flex items-center justify-center border-red-500 text-red-500 hover:bg-red-600 hover:text-white`}
                  onClick={() => closeJob(job?.id)}
                >
                  <FaBriefcase className="mr-2" />
                  <p>{isLoading ? "closing..." : "Close Job"}</p>
                </button>
                )}
                <button
                  className="flex-1 border-[1px] rounded-lg py-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white"
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
