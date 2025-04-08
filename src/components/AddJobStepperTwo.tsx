import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

  // Quill modules configuration
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['link'],
    ]
  };
  return (
    <div className="flex-grow overflow-auto p-4 max-h-[60vh] bg-white">
      <div className="mb-4">
        <label htmlFor="jobDescription" className="block font-semibold mb-1">
          Job Description
        </label>
        <ReactQuill
          id="jobDescription"
          theme="snow"
          value={jobDescription}
          onChange={setJobDescription}
          modules={modules}
          placeholder="Write your job description here..."
          className="h-48 max-h-48 block"
        />
        {/* <textarea
          id="jobDescription"
          name="description"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          placeholder="Describe your job description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea> */}
      </div>

      <div className="mb-4 mt-20">
        <h3 className="font-semibold">Required skills</h3>
        <p className="text-gray-500 text-sm">add skills to be seen by the right candidates (select up to 10)</p>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          id="newSkill"
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a Skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />

        <button
          onClick={addSkill}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Add Skill
        </button>
      </div>

      {/* Skill List */}
      <div className="flex flex-wrap gap-2">
        {skills.length > 0 && skills.map((skill) => (
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
