import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CompanyStepTwo = () => {
  const [formData, setFormData] = useState({
    companyLogo: "",
    companyName: "",
    companyCategory: "",
    companyAddress: "",
    email: "",
    website: "",
    contactNumber: "",
    companyOverview: "",
    gallery: [] as File[],
  });

  const [charCount, setCharCount] = useState(0);
  const [phone, setPhone] = useState("");
  const maxChar = 3000;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    if (id === "companyOverview") {
      setCharCount(value.length);
      if (value.length <= maxChar) {
        setFormData((prev) => ({ ...prev, [id]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          companyLogo: reader.result as string,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white md:p-6">
      <h1 className="text-2xl lg:text-3xl font-bold text-blue-600 text-center">
        Enter Your Company Data
      </h1>

      <div className="flex items-center gap-4 mt-4">
        <div className="relative">
          <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
            {formData.companyLogo ? (
              <img
                src={formData.companyLogo}
                alt="Company Logo"
                className="w-full h-full object-cover "
              />
            ) : (
              <img
                src="https://via.placeholder.com/80"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium">Company Logo</p>
          <input
            type="file"
            id="logoUpload"
            className="hidden"
            accept="image/png, image/jpeg"
            onChange={handleLogoUpload}
          />
          <label
            htmlFor="logoUpload"
            className="mt-2 text-sm text-blue-600 border border-blue-600 px-3 py-1 rounded cursor-pointer"
          >
            Add Logo
          </label>
        </div>
      </div>

      <form className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter company name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="companyCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Company Category *
          </label>
          <select
            id="companyCategory"
            value={formData.companyCategory}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          >
            <option value="">Select company category</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="companyAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Company Address *
          </label>
          <input
            type="text"
            id="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Select location company"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-mail Company *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter company email"
            required
          />
        </div>

        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700"
          >
            Website Company
          </label>
          <input
            type="url"
            id="website"
            value={formData.website}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter company website"
          />
        </div>

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

        {/* Company Overview */}
        <div>
          <label
            htmlFor="companyOverview"
            className="block text-sm font-medium text-gray-700"
          >
            Company Overview
          </label>
          <textarea
            id="companyOverview"
            value={formData.companyOverview}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Describe your company"
          />
          <p className="text-right text-gray-500 text-xs">
            {maxChar - charCount} characters left
          </p>
        </div>
      </form>
    </div>
  );
};

export default CompanyStepTwo;
