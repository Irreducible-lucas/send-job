import { useState } from "react";
import CompanyJobDescription from "../../components/CompanyJobDescription";
import {
  companyApplicants,
  jobDescriptionData,
  companyJobDetails,
} from "../../constant";
import CompanyStatCard from "../../components/CompanyStatCard";
import { CompanyInfo } from "../../components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
    const [activeTab, setActiveTab] = useState("applicants");
    const navigate = useNavigate();
  return (
    <div className="bg-gray-50 p-6 shadow-lg">
      <div className="group hover:cursor-pointer w-[50px] h-[50px] grid place-items-center bg-gray-200 rounded-lg">
      <IoMdArrowRoundBack size={30} className="group-hover:text-blue-700" onClick={() => navigate("/employer/jobs")}/>
      </div>
      <div className="max-w-4xl mx-auto">
        {companyJobDetails.map((job, index) => (
          <CompanyInfo
            key={index}
            logo={job.logo}
            title={job.title}
            company={job.company}
            postedDate={job.postedDate}
          />
        ))}

        <CompanyStatCard />

        <div className="flex border-b my-7">
          <button
            className={`px-4 py-2 ${
              activeTab === "applicants"
                ? "text-blue-600 font-bold border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("applicants")}
          >
            Applicants (15)
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "description"
                ? "text-blue-600 font-bold border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Job Description
          </button>
        </div>

        {activeTab === "applicants" && (
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            {companyApplicants.map((applicant, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow mt-4">
                <div className="flex items-center gap-4">
                  <img
                    src={applicant.imageUrl}
                    alt={applicant.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{applicant.name}</h3>
                    <p className="text-gray-500 text-sm">{applicant.role}</p>
                    <p className="text-gray-400 text-sm">
                      {applicant.location}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {applicant.appliedDate}
                    </p>
                  </div>
                  {applicant.status && (
                    <span className="ml-auto px-3 py-1 text-sm bg-blue-500 text-white rounded-full">
                      Status: {applicant.status}
                    </span>
                  )}
                </div>
                <button onClick={() => navigate(`/employer/jobs/1/applicant/2`)} className="mt-3 w-full border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "description" && (
          <CompanyJobDescription {...jobDescriptionData} />
        )}
      </div>
    </div>
  )
}

export default JobDetails