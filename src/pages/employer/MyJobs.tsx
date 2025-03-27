import { useState } from 'react'
import Header from '../../components/employer/Header'
import { CompanyJob, CompanySavedDraft } from '../../components';
import { FaPlus } from "react-icons/fa";
import { useGetJobsByCompanyIdQuery } from '../../rtk/services/jobs';
import { useAppSelector, useAppDispatch } from '../../rtk/hooks';
import { setJobModalOpen } from '../../rtk/features/user/jobSlice';

const MyJobs = () => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);
  const {data: company_jobs, isLoading}: any = useGetJobsByCompanyIdQuery({id: currentUser?.id});
  const saved_jobs = company_jobs?.data.filter((job: any) => job.posted === 0);
  const posted_jobs = company_jobs?.data.filter((job: any) => job.posted === 1);

  const [selectedTab, setSelectedTab] = useState("saved");
  
  return (
    <div className={"grid grid-rows-[70px_1fr] pb-6"}>
      <Header title='Job Ads' />
      <div className='w-full'>
        <div className="grid grid-cols-2 bg-white pt-8 mb-4 border-b-2 border-gray-300">
          <button
            className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${selectedTab === "saved"
              ? "border-b-4 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
              }`}
            onClick={() => setSelectedTab("saved")}
          >
            Saved Jobs
          </button>
          <button
            className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${selectedTab === "posted"
              ? "border-b-4 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
              }`}
            onClick={() => setSelectedTab("posted")}
          >
            Posted Jobs
          </button>
        </div>
        <div>
          {selectedTab === "saved" && <CompanySavedDraft jobs={saved_jobs} isLoading={isLoading} />}
          {selectedTab === "posted" && <CompanyJob jobs={posted_jobs} isLoading={isLoading} />}
        </div>
      </div>
      <div className="mt-6 flex justify-center fixed bottom-10 right-10 z-20">
        <button
          onClick={() => dispatch(setJobModalOpen(true))}
          className="flex items-center text-lg px-4 py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-900 transition"
        >
          <FaPlus className="mr-2" /> Add Job
        </button>
      </div>
    </div>
  )
}

export default MyJobs