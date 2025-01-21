const steps = [
  {
    title: "Your details",
    description: "Provide an email and password",
    icon: "👤",
  },
  {
    title: "Verify your email",
    description: "Enter your verification code",
    icon: "📧",
  },
  {
    title: "Invite your team",
    description: "Start collaborating with your team",
    icon: "👥",
  },
  {
    title: "Welcome to Untitled!",
    description: "Get up and running in 3 minutes",
    icon: "🎉",
  },
];

const SignupSteps = () => {
  return (
    <div className="flex flex-col gap-4 p-6 w-72 bg-gray-50 border-r border-gray-200">
      <h1 className="text-xl font-semibold">Untitled UI</h1>
      <ul className="flex flex-col gap-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="text-2xl">{step.icon}</div>
            <div>
              <h2 className="text-sm font-semibold">{step.title}</h2>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <button className="text-sm text-gray-500">&larr; Back to home</button>
      </div>
    </div>
  );
};

export default SignupSteps;
