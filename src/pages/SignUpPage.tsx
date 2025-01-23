import { useState } from "react";

const SignUpPage = () => {
  const [step, setStep] = useState(4); // Current step

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
      title: "Invite your team",
      description: "Start collaborating with your team",
    },
    {
      title: "Welcome to Untitled!",
      description: "Get up and running in 3 minutes",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-lg">
        <div className="text-lg font-bold mb-10">Untitled UI</div>
        <ul className="space-y-6">
          {steps.map((item, index) => (
            <li
              key={index}
              className={`flex items-start space-x-4 ${
                index + 1 === step ? "text-black" : "text-gray-500"
              }`}
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
        <div className="mt-10">
          <button className="text-sm text-gray-500 hover:underline">
            Back to home
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-10">
        {step === 4 && (
          <div className="max-w-md w-full text-center">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16c0 2.667 2 4 4 4h8c2 0 4-1.333 4-4V8c0-2.667-2-4-4-4H8c-2 0-4 1.333-4 4v8z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Welcome to Untitled!</h2>
            <p className="text-gray-600 mb-6">
              Get up and running in 3 minutes.
            </p>
            <img
              src="https://via.placeholder.com/300"
              alt="Welcome"
              className="rounded-lg mb-6"
            />
            <button className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Finish up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
