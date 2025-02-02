import { useState } from "react";
import { FinishedJobs, SavedJobs } from "../components";

const JobsTab = () => {
  const [selectedTab, setSelectedTab] = useState("saved");

  return (
    <div className="bg-[#F8FBFF]">
      <div className="p-6 max-w-4xl mx-auto">
        <div>
          <div className="flex space-x-6 mb-6 border-b-2 border-gray-300">
            <button
              className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${
                selectedTab === "saved"
                  ? "border-b-4 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab("saved")}
            >
              Saved
            </button>
            {/* <button
              className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${
                selectedTab === "process"
                  ? "border-b-4 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab("process")}
            >
              Process
            </button> */}
            <button
              className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${
                selectedTab === "finished"
                  ? "border-b-4 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab("finished")}
            >
              Finished
            </button>
          </div>

          <div className="mt-6">
            {selectedTab === "saved" && <SavedJobs />}
            {/* {selectedTab === "process" && <ProcessJobs />} */}
            {selectedTab === "finished" && <FinishedJobs />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsTab;
