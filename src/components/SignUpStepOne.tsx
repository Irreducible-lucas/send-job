import React, { FC } from "react";

const SignUpStepOne: FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Proceed to the next step.");
  };

  return (
    <div className="flex  justify-center">
      <div className="w-full max-w-md ">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            Create a free account
          </h2>
          <p className="text-sm text-gray-600">
            Provide your email and choose a password.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              placeholder="Choose a password"
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
          <div className="relative flex items-center justify-center mt-10">
            <span className="absolute px-2 text-sm text-gray-500 bg-white">
              OR
            </span>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <img src="/apple-icon.png" alt="Apple" className="w-5 h-5 mr-2" />
            Sign up with Apple ID
          </button>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpStepOne;
