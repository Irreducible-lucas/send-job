import React, { useState } from "react";

const EditPersonalData: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    jobTitle: "",
    dateOfBirth: "",
    gender: "",
    telephone: "",
    domicile: "",
    countryCode: "+1",
  });

  const countryCodes = [
    { code: "+1", label: "United States" },
    { code: "+44", label: "United Kingdom" },
    { code: "+91", label: "India" },
    { code: "+61", label: "Australia" },
    { code: "+81", label: "Japan" },
  ];

  const domiciles = [
    "New York",
    "Los Angeles",
    "London",
    "Mumbai",
    "Sydney",
    "Tokyo",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-full max-w-md"
      >
        <h1 className="text-xl font-semibold mb-4 text-center">
          Edit personal data
        </h1>
        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job title
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Enter job title"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* Telephone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telephone number
            </label>
            <div className="flex items-center mt-1 border border-gray-300 rounded-md">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="p-2 border-r border-gray-300 bg-gray-100 text-sm rounded-l-md"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Enter telephone number"
                className="flex-1 p-2 focus:ring-blue-500 focus:border-blue-500 rounded-r-md"
              />
            </div>
          </div>
          {/* Current Domicile */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Current domicile
            </label>
            <select
              name="domicile"
              value={formData.domicile}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select current domicile
              </option>
              {domiciles.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-6 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditPersonalData;
