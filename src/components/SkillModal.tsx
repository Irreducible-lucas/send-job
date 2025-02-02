import { useState } from "react";

interface SkillFormProps {
  onClose: () => void;
}

const SkillModal: React.FC<SkillFormProps> = ({ onClose }) => {
  const [skill, setSkill] = useState("");
  const [experience, setExperience] = useState("");

  const handleSave = () => {
    console.log({ skill, experience });
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-semibold text-center flex-grow">
            Add skill
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
              Skill <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Enter skill"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Years of experience
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
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

export default SkillModal;
