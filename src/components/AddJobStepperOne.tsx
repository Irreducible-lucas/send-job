import React from "react";
import { useGetCategoriesQuery } from "../rtk/services/categories";

interface Step1Props {
  formData: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const AddJobStepperOne: React.FC<Step1Props> = ({
  formData,
  handleChange,
}) => {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  return (
    <div className="flex-grow overflow-auto p-4 max-h-[60vh] bg-white">
      <div>
        <label className="block font-semibold mb-1">Job Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Job Title"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Job Type</label>
        <select
          required
          name="employment_type"
          value={formData.employment_type}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-Time</option>
          <option value="Part-time">Part-Time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">Job Category</label>
        <select
          required
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        >
          <option value="">Select Job Category</option>
          {isLoading ? "Please wait..." : categories?.data.map((category: any) => <option key={category.id} value={category.id}>{category.name}</option>)}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">Workplace Type</label>
        <select
          required
          name="workplace_type"
          value={formData.workplace_type}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        >
          <option value="">Select Workplace Type</option>
          <option value="Onsite">Onsite</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="City"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="state"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Country"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Experience (Years)</label>
        <input
          type="number"
          min={0}
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Years of experience"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Currency</label>
        <select
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        >
          <option value="">Select Currency</option>
          <option value="NGN">NGN
          </option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      <label className="block mb-1 font-semibold">Salary Range</label>
      <div className="flex gap-3 mb-4">
        <input
          type="number"
          min={0}
          name="min_salary"
          value={formData.min_salary}
          onChange={handleChange}
          className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Min"
        />
        <input
          type="number"
          min={0}
          name="max_salary"
          value={formData.max_salary}
          onChange={handleChange}
          className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Max"
        />
      </div>
    </div>
  );
};

export default AddJobStepperOne;
