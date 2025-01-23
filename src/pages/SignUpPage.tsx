import { useState, FC } from "react";
import SignUpStepOne from "../components/SignUpStepOne";
import SignUpStepTwo from "../components/SignUpStepTwo";
import SignUpStepThree from "../components/SignUpStepThree";
import { Logo } from "../assets";

const logoUrl = Logo;

const SignUpPage: FC = () => {
  const [step, setStep] = useState<number>(1);

  const steps = [
    {
      title: "Your details",
      description: "Provide an email and password",
    },
    {
      title: "Verify your email",
      description: "Enter your verification code",
    },
    {
      title: "Welcome to Untitled!",
      description: "Get up and running in 3 minutes",
    },
  ];

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar - hidden on small screens */}
      <div className="hidden md:block w-1/4 bg-gray-100 p-6 shadow-lg flex-col">
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
        {/* Buttons at the bottom */}

        <div className="mx-auto flex justify-between">
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

      {/* Main Content */}
      <div className="flex-1 flex pt-10 justify-center  bg-white">
        <div className="w-full max-w-md p-6">
          {/* Logo before content */}
          <div className="mb-6 text-center">
            <img src={logoUrl} alt="Company Logo" className="mx-auto h-16" />
          </div>

          {step === 1 && <SignUpStepOne />}
          {step === 2 && <SignUpStepTwo />}
          {step === 3 && <SignUpStepThree />}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
