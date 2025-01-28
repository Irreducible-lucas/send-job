import { useState } from "react";
import { ModalProps } from "../type";
import { Plus } from "lucide-react";

const JobTitleModal = ({ isOpen, onClose, onSave }: ModalProps) => {
  const [jobTitles, setJobTitles] = useState<string[]>([""]);

  if (!isOpen) return null;

  const handleChange = (index: number, value: string) => {
    const updatedTitles = [...jobTitles];
    updatedTitles[index] = value;
    setJobTitles(updatedTitles);
  };

  const addJobTitle = () => {
    if (jobTitles.length < 10) {
      setJobTitles([...jobTitles, ""]);
    }
  };

  const handleSave = () => {
    onSave(jobTitles);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-semibold text-center flex-grow">
            Add Job Title
          </h2>
          <button
            className="text-xl text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <p className="text-base lg:text-lg font-semibold">
          Here you can add your preferred job titles.
        </p>

        <div className="space-y-4 mt-4">
          {jobTitles.map((title, index) => (
            <div key={index}>
              <p className="block text-sm font-medium text-gray-700 mb-1 ">
                Add up to ten job title
              </p>
              <input
                type="text"
                value={title}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Enter job title"
              />
            </div>
          ))}

          {jobTitles.length < 10 && (
            <button
              onClick={addJobTitle}
              className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
            >
              <Plus className="w-4 h-4 mr-1" /> Add another
            </button>
          )}
        </div>

        <div className="mt-6">
          <div className="border-b pb-4 mb-4"></div> {/* Divider added here */}
          <div className="flex justify-end space-x-4">
            <button
              className="text-gray-500 border px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="text-white bg-blue-600 px-4 py-2 rounded-lg"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTitleModal;
