import { useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "STANDARD",
    price: "FREE",
    features: [
      "limited range",
      "Ads only appear 10 days after posting a job",
      "the capacity is only 20 job applicants",
    ],
  },
  {
    name: "PREMIUM",
    price: "$125",
    features: [
      "unlimited range",
      "Ads only appear 1 month after posting a job",
      "the capacity is only 50 job applicants",
    ],
  },
];

export default function PromoteJobAds() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0].name);

  return (
    <div className="max-w-md mx-auto h-screen p-4 bg-white rounded-lg shadow-md flex flex-col">
      <h2 className="text-lg font-semibold text-center mb-4">
        Promote job ads
      </h2>
      <div className="space-y-4 flex-grow">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border p-4 rounded-lg cursor-pointer ${
              selectedPlan === plan.name ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-5">
                  <Circle className="absolute text-gray-400 w-full h-full" />
                  {selectedPlan === plan.name && (
                    <CheckCircle className="absolute text-blue-500 w-full h-full" />
                  )}
                </div>
                <span className="font-semibold">{plan.name}</span>
              </div>
              <span className="text-blue-500 font-semibold">{plan.price}</span>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-1">
                  <CheckCircle className="text-green-500 w-4 h-4" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex gap-x-5 mt-auto pb-4">
        <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg w-1/3">
          Draft
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg w-2/3">
          Pay
        </button>
      </div>
    </div>
  );
}
