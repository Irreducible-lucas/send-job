import { useState } from "react";

const LanguageModal = ({ onClose }: { onClose: () => void }) => {
  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("");

  const handleSave = () => {
    console.log({ language, proficiency });
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-semibold text-center flex-grow">
            Add language
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
          {/* Language Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Example: Spanish"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Proficiency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Proficiency
            </label>
            <select
              value={proficiency}
              onChange={(e) => setProficiency(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select proficiency</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Fluent">Fluent</option>
            </select>
          </div>
        </div>

        {/* Divider above buttons */}
        <div className="border-t w-full mt-6 mb-4"></div>

        {/* Modal Footer */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="text-gray-500 border px-4 py-2 rounded-lg hover:bg-gray-100"
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

export default LanguageModal;
