import React, { useState } from "react";

const SignUpStepTwo = () => {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvReview, setCvReview] = useState<boolean>(true);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [receiveTips, setReceiveTips] = useState<boolean>(false);
  const [jobAlerts, setJobAlerts] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setCvFile(event.target.files[0]);
    }
  };

  const handleCvReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvReview(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!termsAccepted) {
      alert("You must agree to the Terms & Conditions to proceed.");
      return;
    }
    // Handle form submission logic
    console.log({
      cvFile,
      cvReview,
      termsAccepted,
      receiveTips,
      jobAlerts,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white">
      <h1 className="text-2xl lg:text-3xl font-bold text-blue-600 text-center">
        Educational Qualification
      </h1>
      <p className="mt-2 text-gray-600 text-center text-lg mb-5">
        Specify your highest level of education.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Highest Qualification */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Highest Qualification <span className="text-red-500">*</span>
          </label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select...</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
            <option value="diploma">Diploma</option>
          </select>
        </div>

        {/* Years of Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Years of Experience <span className="text-red-500">*</span>
          </label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select...</option>
            <option value="0-1">0-1 Years</option>
            <option value="2-5">2-5 Years</option>
            <option value="6-10">6-10 Years</option>
            <option value="10+">10+ Years</option>
          </select>
        </div>

        {/* Current Job Function */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Current Job Function <span className="text-red-500">*</span>
          </label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select...</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Desired Job Function */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Desired Job Function <span className="text-red-500">*</span>
          </label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select...</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Availability */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Availability <span className="text-red-500">*</span>
          </label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select...</option>
            <option value="immediate">Immediate</option>
            <option value="1-month">1 Month</option>
            <option value="3-months">3 Months</option>
          </select>
        </div>
      </div>

      {/* CV Upload */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Upload CV
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.rtf"
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:bg-blue-50 file:text-blue-700 file:cursor-pointer hover:file:bg-blue-100"
          onChange={handleFileChange}
        />
        {cvFile && <p className="mt-2 text-sm text-gray-600">{cvFile.name}</p>}
        <p className="mt-1 text-xs text-gray-500">
          Optionally upload a CV no larger than 10MB. Accepted formats: .pdf,
          .doc, .docx, .rtf.
        </p>
      </div>

      {/* CV Review */}
      <div className="mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            checked={cvReview}
            onChange={handleCvReviewChange}
          />
          <span className="ml-2 text-sm text-gray-700">
            I would like a free CV review
          </span>
        </label>
        <p className="mt-1 text-xs text-gray-500">
          Receive a free CV review and know how to stand out to employers.
        </p>
      </div>

      {/* Terms, Tips, and Alerts */}
      <div className="mt-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
          />
          <span className="text-gray-600 text-sm">
            I agree to the{" "}
            <a href="#" className="text-blue-500 underline">
              TERMS & CONDITIONS
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline">
              PRIVACY POLICY
            </a>
          </span>
        </label>

        <label className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={receiveTips}
            onChange={() => setReceiveTips(!receiveTips)}
            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
          />
          <span className="text-gray-600 text-sm">
            I would like to receive top jobs and career tips
          </span>
        </label>

        <label className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={jobAlerts}
            onChange={() => setJobAlerts(!jobAlerts)}
            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
          />
          <span className="text-gray-600 text-sm">
            Sign me up for email and browser Job alerts
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition"
      >
        Create Your Account
      </button>
    </form>
  );
};

export default SignUpStepTwo;
