import React from "react";

interface WorkExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const WorkExperienceModal: React.FC<WorkExperienceModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-semibold text-center flex-grow">
            Add most recent work experience
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Enter job title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Enter company name"
            />
          </div>
        </div>

        {/* Divider above buttons */}
        <div className="border-b pb-4 mb-4"></div>

        {/* Modal Footer */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="text-gray-500 border px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="text-white bg-blue-600 px-4 py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceModal;
