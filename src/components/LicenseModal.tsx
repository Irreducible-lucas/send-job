import { useState } from "react";

interface LicenseFormProps {
  onClose: () => void;
}

const LicenseModal: React.FC<LicenseFormProps> = ({ onClose }) => {
  const [licenseName, setLicenseName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [noExpiry, setNoExpiry] = useState(false);

  const handleSave = () => {
    console.log({
      licenseName,
      month: noExpiry ? "N/A" : month,
      year: noExpiry ? "N/A" : year,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-semibold text-center flex-grow">
            Add license
          </h2>
          <button
            onClick={onClose}
            className="text-xl text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-4 mt-4">
          {/* License Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              License name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={licenseName}
              onChange={(e) => setLicenseName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Example: Driver's license"
            />
          </div>

          {/* Expiration Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiration date
            </label>
            <div className="flex space-x-2">
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                disabled={noExpiry}
                className="w-1/2 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:outline-none bg-white disabled:bg-gray-100"
              >
                <option value="">Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                disabled={noExpiry}
                className="w-1/2 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:outline-none bg-white disabled:bg-gray-100"
              >
                <option value="">Year</option>
                {Array.from(
                  { length: 30 },
                  (_, i) => new Date().getFullYear() + i
                ).map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* "Does not expire" Checkbox */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              checked={noExpiry}
              onChange={() => setNoExpiry(!noExpiry)}
              className="w-4 h-4 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-700">
              Does not expire
            </label>
          </div>
        </div>

        {/* Divider above buttons */}
        <div className="border-t w-full mt-6 mb-4"></div>

        {/* Modal Footer */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="text-gray-500 border px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100">
            Save and add another
          </button>
          <button
            onClick={handleSave}
            className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LicenseModal;
