import React from "react";

interface Step2Props {
  jobDescription: string;
  setJobDescription: React.Dispatch<React.SetStateAction<string>>;
  skills: string[];
  newSkill: string;
  setNewSkill: React.Dispatch<React.SetStateAction<string>>;
  addSkill: () => void;
  removeSkill: (skill: string) => void;
}

const AddJobStepperTwo: React.FC<Step2Props> = ({
  jobDescription,
  setJobDescription,
  skills,
  newSkill,
  setNewSkill,
  addSkill,
  removeSkill,
}) => {
  return (
    <div className="flex-grow overflow-auto p-4 max-h-[60vh] bg-white">
      <div className="mb-4">
        <label htmlFor="jobDescription" className="block font-semibold mb-1">
          Job Description
        </label>
        <textarea
          id="jobDescription"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          placeholder="Describe your job description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        ></textarea>
      </div>

      <h3 className="block font-semibold mb-3 mt-4">Add skill</h3>

      <label
        htmlFor="newSkill"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        New Skill
      </label>
      <div className="flex gap-2 mb-4">
        <input
          id="newSkill"
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add Skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />

        <button
          onClick={addSkill}
          className="px-3 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      {/* Skill List */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full shadow"
          >
            {skill}
            <button
              onClick={() => removeSkill(skill)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddJobStepperTwo;
