import React, { useState } from "react";

const EditWorkExperience: React.FC = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [stillWorking, setStillWorking] = useState(false);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <button className="text-gray-600 hover:text-gray-800">
          <span className="material-icons">arrow_back</span>
        </button>
        <h2 className="text-lg font-semibold">Edit work experience</h2>
      </div>

      {/* Form */}
      <form className="mt-6 space-y-4">
        {/* Company Name */}
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company name
          </label>
          <input
            id="companyName"
            type="text"
            placeholder="entry company name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Job Name */}
        <div>
          <label
            htmlFor="jobName"
            className="block text-sm font-medium text-gray-700"
          >
            Job name
          </label>
          <input
            id="jobName"
            type="text"
            placeholder="entry job name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Job Description */}
        <div>
          <label
            htmlFor="jobDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Job description
          </label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            maxLength={300}
            placeholder="entry your job description"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          ></textarea>
          <p className="text-right text-sm text-gray-500 mt-1">
            {300 - jobDescription.length} character
            {300 - jobDescription.length !== 1 && "s"} left
          </p>
        </div>

        {/* Start Date */}
        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700"
          >
            Start date
          </label>
          <div className="relative">
            <input
              id="startDate"
              type="date"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
        </div>

        {/* End Date */}
        <div>
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700"
          >
            End date
          </label>
          <div className="relative">
            <input
              id="endDate"
              type="date"
              className={`w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none ${
                stillWorking && "opacity-50 pointer-events-none"
              }`}
              disabled={stillWorking}
            />
          </div>
          <div className="flex items-center mt-2">
            <input
              id="stillWorking"
              type="checkbox"
              checked={stillWorking}
              onChange={(e) => setStillWorking(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
            />
            <label
              htmlFor="stillWorking"
              className="ml-2 text-sm text-gray-700"
            >
              still working
            </label>
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditWorkExperience;
