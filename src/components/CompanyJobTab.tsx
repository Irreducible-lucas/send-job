import { useState } from "react";
import { CompanyJob, CompanySavedDraft } from ".";

const CompanyJobTab = () => {
  const [selectedTab, setSelectedTab] = useState("saved");

  return (
    <div className="bg-[#F8FBFF]">
      <div className="p-6 max-w-4xl mx-auto">
        <div>
          <div className="text-center mb-10">
            <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mt-2">
              Jobs Advertisement
            </h2>
          </div>
          <div className="flex space-x-6 mb-6 border-b-2 border-gray-300">
            <button
              className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${
                selectedTab === "saved"
                  ? "border-b-4 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab("saved")}
            >
              Saved Draft
            </button>
            <button
              className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${
                selectedTab === "posted"
                  ? "border-b-4 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setSelectedTab("posted")}
            >
              Post Jobs
            </button>
          </div>

          <div className="mt-6">
            {selectedTab === "saved" && <CompanySavedDraft />}
            {selectedTab === "posted" && <CompanyJob />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyJobTab;
