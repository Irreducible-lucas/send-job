import { useState } from "react";
import { Home, Inbox, Calendar, Search } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/ui/sidebar";

const steps = [
  {
    title: "Your details",
    description: "Provide an email and password",
    icon: Home,
  },
  {
    title: "Verify your email",
    description: "Enter your verification code",
    icon: Inbox,
  },
  {
    title: "Invite your team",
    description: "Start collaborating with your team",
    icon: Calendar,
  },
  {
    title: "Welcome to Untitled!",
    description: "Get up and running in 3 minutes",
    icon: Search,
  },
];

const SignUpMenu = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {steps.map((step, index) => (
                  <SidebarMenuItem key={step.title}>
                    <SidebarMenuButton
                      asChild
                      onClick={() => setCurrentStep(index + 1)}
                    >
                      <a href="#">
                        <step.icon />
                        <span>{step.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-10 w-full">
        {currentStep === 1 && (
          <div className="w-full text-center">
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
        {currentStep !== 1 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              {steps[currentStep - 1].title}
            </h2>
            <p className="text-gray-600">
              {steps[currentStep - 1].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpMenu;
