import { ModalProps } from "../type";
import { useState } from "react";

const jobTypes = [
  "Full-time",
  "Part-time",
  "Permanent",
  "Temporary",
  "Contract",
  "Internship",
  "New grad",
];

const JobTypeModal = ({ isOpen, onClose, onSave }: ModalProps) => {
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleCheckboxChange = (jobType: string) => {
    setSelectedJobTypes((prev) =>
      prev.includes(jobType)
        ? prev.filter((type) => type !== jobType)
        : [...prev, jobType]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        {/* Title Section with Border */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-semibold text-center flex-grow">
            Add Job Type
          </h2>
          <button
            className="text-xl text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <p className="mb-4 font-semibold">What are your desired job types?</p>

        {/* Job Type Checkbox List */}
        <div className="space-y-2">
          {jobTypes.map((jobType) => (
            <label
              key={jobType}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-5 h-5"
                checked={selectedJobTypes.includes(jobType)}
                onChange={() => handleCheckboxChange(jobType)}
              />
              <span>{jobType}</span>
            </label>
          ))}
        </div>

        <div className="border-t pt-4 mt-4 flex justify-end space-x-4">
          <button
            className="text-gray-500 border px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-white bg-blue-600 px-4 py-2 rounded-lg"
            onClick={() => onSave(selectedJobTypes)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobTypeModal;
