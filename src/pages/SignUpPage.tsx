import { useState, FC } from "react";
import SignUpStepOne from "../components/SignUpStepOne";
import SignUpStepTwo from "../components/SignUpStepTwo";
import SignUpStepThree from "../components/SignUpStepThree";
import SignUpStepFour from "../components/SignUpStepFour";
import { steps } from "../constant";

const SignUpPage: FC = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      {/* Sidebar for Large Devices */}
      <div className="hidden lg:flex lg:w-1/4 bg-gray-100 p-6 shadow-lg flex-col">
        <div className="text-lg font-bold mb-10">Send Job</div>
        <ul className="space-y-6 flex-1">
          {steps.map((item, index) => (
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
      <div className="block lg:hidden w-full max-w-md mx-auto">
        <div className="flex items-center justify-center space-x-4 mt-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setStep(index + 1)}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${
                  step > index
                    ? "bg-blue-500"
                    : step === index + 1
                    ? "bg-blue-300"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </div>
              <p
                className={`text-sm mt-2 ${
                  step === index + 1 ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {item.title}
              </p>
              {index < steps.length - 1 && (
                <div
                  className={`w-8 h-1 ${
                    step > index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full p-6">
          {step === 1 && <SignUpStepOne />}
          {step === 2 && <SignUpStepTwo />}
          {step === 3 && <SignUpStepThree />}
          {step === 4 && <SignUpStepFour />}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
