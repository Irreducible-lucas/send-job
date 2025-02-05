import React from "react";

interface Step1Props {
  formData: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleBudgetChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const AddJobStepperOne: React.FC<Step1Props> = ({
  formData,
  handleChange,
  handleBudgetChange,
}) => {
  return (
    <div className="flex-grow overflow-auto p-4 max-h-[60vh] bg-white">
      <label className="block font-semibold mb-1">Job Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="Job Title"
      />

      <label className="block mb-1 font-semibold">Workplace Type</label>
      <select
        name="workplace"
        value={formData.workplace}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      >
        <option value="">Select Workplace Type</option>
        <option value="Remote">Remote</option>
        <option value="Onsite">Onsite</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <label className="block mb-1 font-semibold">Job Type</label>
      <select
        name="jobType"
        value={formData.jobType}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      >
        <option value="">Select Job Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
      </select>

      <label className="block mb-1 font-semibold">Job Specialization</label>
      <input
        type="text"
        name="specialization"
        value={formData.specialization}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="Job Specialization"
      />

      <label className="block mb-1 font-semibold">Job Role</label>
      <input
        type="text"
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="Job Role"
      />

      <label className="block mb-1 font-semibold">Experience (Years)</label>
      <input
        type="text"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="Experience (Years)"
      />

      <label className="block mb-1 font-semibold">Posting Site</label>
      <input
        type="text"
        name="postingSite"
        value={formData.postingSite}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="Posting Site"
      />

      <label className="block mb-1 font-semibold">Currency</label>
      <select
        name="currency"
        value={formData.budget.currency}
        onChange={handleBudgetChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      >
        <option value="">Select Currency</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      <label className="block mb-1 font-semibold">Salary Range</label>
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          name="min"
          value={formData.budget.min}
          onChange={handleBudgetChange}
          className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Min"
        />
        <input
          type="text"
          name="max"
          value={formData.budget.max}
          onChange={handleBudgetChange}
          className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Max"
        />
      </div>

      <label className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          name="displaySalary"
          checked={formData.budget.displaySalary}
          onChange={handleBudgetChange}
          className="focus:ring-2 focus:ring-blue-500"
        />
        Display salary details in ads?
      </label>
    </div>
  );
};

export default AddJobStepperOne;
