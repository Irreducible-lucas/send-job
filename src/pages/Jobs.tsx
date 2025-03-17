import { useState } from 'react'
import { useAppSelector } from '../rtk/hooks';
import { EmployeeFinishedJobs, EmployeeProcessJobs, EmployeeSavedJobs } from '../components';

const Jobs = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const [selectedTab, setSelectedTab] = useState("saved");

  return (
    <div className={"grid grid-rows-[70px_1fr] pb-6"}>
      <header className='h-[70px] px-[40px] bg-white flex items-center border-b-2 border-gray-300'>
        <h2 className='text-xl font-bold'>Jobs</h2>
      </header>
      <div className='w-full'>
        <div className="grid grid-cols-3 bg-white pt-8 mb-4 border-b-2 border-gray-300">
          <button
            className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${selectedTab === "saved"
              ? "border-b-4 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
              }`}
            onClick={() => setSelectedTab("saved")}
          >
            Saved
          </button>
          <button
            className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${selectedTab === "process"
              ? "border-b-4 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
              }`}
            onClick={() => setSelectedTab("process")}
          >
            Process
          </button>
          <button
            className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${selectedTab === "finished"
              ? "border-b-4 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
              }`}
            onClick={() => setSelectedTab("finished")}
          >
            Finished
          </button>
        </div>
        <div>
          {selectedTab === "saved" && <EmployeeSavedJobs userId={currentUser?.id} />}
          {selectedTab === "process" && <EmployeeProcessJobs userId={currentUser?.id} />}
          {selectedTab === "finished" && <EmployeeFinishedJobs userId={currentUser?.id} />}
        </div>
      </div>
    </div>
  )
}

export default Jobs