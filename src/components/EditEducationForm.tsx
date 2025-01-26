import React, { useState } from "react";

interface EducationFormProps {
  onSave: (data: EducationData) => void;
}

interface EducationData {
  levelOfEducation: string;
  school: string;
  department: string;
  startDate: string;
  endDate: string;
  experience: string;
}

const EditEducationForm: React.FC<EducationFormProps> = ({ onSave }) => {
  const [formData, setFormData] = useState<EducationData>({
    levelOfEducation: "",
    school: "",
    department: "",
    startDate: "",
    endDate: "",
    experience: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Edit Education</h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="levelOfEducation"
            className="block text-sm font-medium text-gray-700"
          >
            Level of education
          </label>
          <select
            id="levelOfEducation"
            name="levelOfEducation"
            value={formData.levelOfEducation}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
          >
            <option value="">Select level of education</option>
            <option value="High School">High School</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="school"
            className="block text-sm font-medium text-gray-700"
          >
            School/University
          </label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            placeholder="Enter your school/university"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
          />
        </div>
        <div>
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-700"
          >
            Department/Major
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter department/major"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
          />
        </div>
        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700"
          >
            Start date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
          />
        </div>
        <div>
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700"
          >
            End date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
          />
        </div>
        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700"
          >
            Experience
          </label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Tell me here..."
            maxLength={300}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
          ></textarea>
          <p className="text-sm text-gray-500">
            {300 - formData.experience.length} characters left
          </p>
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditEducationForm;
