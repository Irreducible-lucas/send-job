import { useState } from "react";
import { companySteps } from "../constant";
import CompanyStepOne from "./CompanyStepOne";
import CompanyStepTwo from "./CompanyStepTwo";

const CompanyRegistration = () => {
  const [step, setStep] = useState<number>(1);

  const renderButtons = () => {
    return (
      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            onClick={() => setStep(step - 1)}
          >
            Previous
          </button>
        )}

        {step < companySteps.length ? (
          <button
            className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        ) : (
          <button
            className="ml-auto px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-00"
            onClick={() => {}}
          >
            Register
          </button>
        )}
      </div>
    );
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return <CompanyStepOne />;
      case 2:
        return <CompanyStepTwo />;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      {/* Sidebar for Large Devices */}
      <div className="hidden lg:flex lg:w-1/4 bg-gray-100 p-6 shadow-lg flex-col">
        <div className="text-lg font-bold mb-10">Send Job</div>
        <ul className="space-y-6 flex-1">
          {companySteps.map((item, index) => (
            <li
              key={index}
              className={`flex items-start space-x-4 cursor-pointer ${
                index + 1 === step ? "text-black" : "text-gray-500"
              }`}
              onClick={() => setStep(index + 1)}
            >
              <span
                className={`w-6 h-6 flex items-center justify-center rounded-full border ${
                  index + 1 === step
                    ? "bg-green-500 text-white border-green-500"
                    : "border-gray-300"
                }`}
              >
                {index + 1}
              </span>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex justify-between">
          <a href="/">
            <button className="text-sm text-gray-500 hover:underline flex items-center">
              <span>&lt;</span> Back to home
            </button>
          </a>
          <a href="login">
            <button className="text-sm text-blue-500 hover:underline">
              Sign In
            </button>
          </a>
        </div>
      </div>

      {/* Stepper for Small and Medium Devices */}
      <div className="block lg:hidden w-full max-w-md mx-auto overflow-x-hidden">
        <div className="flex items-center justify-around mt-6">
          {companySteps.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {/* Circle with Step Number */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${
                  step > index
                    ? "bg-blue-500"
                    : step === index + 1
                    ? "bg-blue-300"
                    : "bg-gray-300"
                }`}
                onClick={() => setStep(index + 1)}
              >
                {index + 1}
              </div>

              {/* Line Between Steps */}
              {index < companySteps.length - 1 && (
                <div
                  className={`h-1 w-6 ${
                    step > index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Titles */}
        <div className="flex justify-around mt-2">
          {companySteps.map((item, index) => (
            <p
              key={index}
              className={`text-sm ${
                step === index + 1 ? "text-blue-500" : "text-gray-500"
              } text-center w-10`}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full p-6">
          {renderContent()}
          {renderButtons()}
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;
