import { useState } from "react";
import { EyeOff } from "lucide-react";

const PayModal = ({
  isOpen,
  onClose,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}) => {
  const [minPay, setMinPay] = useState("");
  const [payPeriod, setPayPeriod] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-2xl font-semibold text-center flex-grow">
            Add Pay Modal
          </h2>
          <button
            className="text-xl text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Title Underline */}
        <div className="border-b mb-4"></div>

        {/* Pay Filter Form */}
        <div>
          <h2 className="text-lg font-semibold">
            What is the minimum pay you'll consider in your search?
          </h2>

          <div className="flex items-center bg-blue-100 text-blue-600 p-3 rounded-md mt-3">
            <EyeOff className="w-5 h-5 mr-2" />
            <span>Not shown to employers.</span>
          </div>

          {/* Inputs side by side */}
          <div className="mt-4 flex gap-4">
            {/* Minimum Pay Input */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Minimum base pay
              </label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                  ₦
                </span>
                <input
                  type="number"
                  value={minPay}
                  onChange={(e) => setMinPay(e.target.value)}
                  step="500"
                  className="pl-8 pr-3 py-2 border rounded-md w-full focus:ring focus:ring-blue-200 outline-none"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            {/* Pay Period Select */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Pay period
              </label>
              <select
                value={payPeriod}
                onChange={(e) => setPayPeriod(e.target.value)}
                className="w-full border py-2 px-3 rounded-md mt-1 focus:ring focus:ring-blue-200 outline-none"
              >
                <option value="">Select</option>
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border-b mt-6 mb-4"></div>

        {/* Buttons */}
        <div className="mt-4 flex justify-end space-x-4">
          <button
            className="text-gray-500 border px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-white bg-blue-600 px-4 py-2 rounded-lg"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayModal;
