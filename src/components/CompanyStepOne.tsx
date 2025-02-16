import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CompanyStepOne = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <div className="max-w-2xl mx-auto bg-white md:p-6 ">
      <h1 className="text-2xl lg:text-3xl font-bold text-blue-600 text-center mb-7">
        Create a Company Account
      </h1>

      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Entry full name"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="Entry email"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Title *
          </label>
          <input
            type="text"
            placeholder="Entry department"
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender *
          </label>
          <select className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm bg-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="" disabled selected>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telephone Number *
          </label>
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={setPhone}
            inputClass="!w-full !p-3 !border !rounded-md !shadow-sm !focus:ring-blue-500 !focus:border-blue-500 sm:!text-sm"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Create Password *
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Entry new password"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompanyStepOne;
