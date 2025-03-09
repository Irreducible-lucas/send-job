import { FaBriefcase } from "react-icons/fa"
import { useAppSelector } from "../../rtk/hooks"
import { IoMdPin } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import ApplicantsListTab from "./ApplicantsListTab";
import JobDescriptionTab from "./JobDescriptionTab";
import ApplicantProfile from "./ApplicantProfile";
import moment from "moment";

const EmployerJobDetails = ({ onClose }: any) => {
  const { jobInfo, isViewingApplicantProfile } = useAppSelector((state) => state.job);
  const [selectedTab, setSelectedTab] = useState("applicants");
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] lg:w-[50%] relative h-[90%] max-h-[90%]">
        {isViewingApplicantProfile ? <ApplicantProfile /> : (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold mx-auto">Job Details</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <hr className="border-gray-300 my-5" /> {/* Line below the title */}

            <div className="flex items-center gap-4">
              <div className="h-[100px] w-[100px] p-2 rounded-lg border-gray-200 bg-white border-2">
                {jobInfo?.company_logo_url === "" ? (<div className="h-[80px] w-[80px] grid place-items-center rounded-full bg-blue-700">
                  <FaBriefcase className="text-white" size={50} />
                </div>) : (<img src={jobInfo?.company_logo_url} alt="Logo" className="w-full h-full object-contain" />)}
              </div>
              <div className="flex flex-col gap-3 w-full">
                <h3 className="text-xl font-semibold capitalize">{jobInfo?.job_title}</h3>
                <div className="flex items-center gap-4">
                  <p className="text-base text-blue-600">
                    {jobInfo?.company_name}
                  </p>
                  <div className="flex items-center gap-1 text-gray-500"><IoMdPin size={20} /> <span>{jobInfo.job_city}, {jobInfo.job_state}, {jobInfo.job_country}</span></div>
                </div>
                <div className="flex items-center flex-wrap gap-4">
                  <div className="bg-blue-100 text-blue-600 text-sm py-1 px-2 rounded-lg">{jobInfo?.workplace_type}</div>
                  <div className="bg-blue-100 text-blue-600 text-sm py-1 px-2 rounded-lg">{jobInfo?.job_employment_type}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <FaRegCalendarAlt size={20} /> <span>{moment(jobInfo?.updatedAt).format("MMM Do YYYY")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 w-full grid grid-cols-3 rounded-lg border-gray-200 bg-white border-2 my-4">
              <div className="grid place-items-center gap-1">
                <h3 className="text-gray-500">Applicants</h3>
                <p className="font-bold text-lg">{jobInfo?.applicants}</p>
              </div>
              <div className="grid place-items-center gap-1 border-x-4  ">
                <h3 className="text-gray-500">Interview</h3>
                <p className="font-bold text-lg">1</p>
              </div>
              <div className="grid place-items-center gap-1">
                <h3 className="text-gray-500">Rejected</h3>
                <p className="font-bold text-lg">0</p>
              </div>
            </div>

            <div className='w-full'>
              <div className="grid grid-cols-2 bg-white mb-4 border-b-2 border-gray-300">
                <button
                  className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${selectedTab === "applicants"
                    ? "border-b-4 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                    }`}
                  onClick={() => setSelectedTab("applicants")}
                >
                  Applicants ({jobInfo.applicants})
                </button>
                <button
                  className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${selectedTab === "description"
                    ? "border-b-4 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                    }`}
                  onClick={() => setSelectedTab("description")}
                >
                  Job Description
                </button>
              </div>
              <div>
                {selectedTab === "applicants" && <ApplicantsListTab />}
                {selectedTab === "description" && <JobDescriptionTab job={jobInfo} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EmployerJobDetails