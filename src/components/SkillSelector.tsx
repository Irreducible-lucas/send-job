// SkillSelector.tsx
import React, { useState, useEffect } from "react";
import { array } from "yup";

interface SkillSelectorProps {
  skills: string[];
  maxSelection: number;
  setInterestedJobs: any;
}

const SkillSelector: React.FC<SkillSelectorProps> = ({
  skills,
  maxSelection,
  setInterestedJobs,
}) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkillSelection = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else if (selectedSkills.length < maxSelection) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  useEffect(() => {
    const jobs =
      selectedSkills.length === 0
        ? ""
        : selectedSkills.reduce((acc, item, index) => {
            return acc + item + (index < selectedSkills.length - 1 ? ", " : "");
          }, "");
    setInterestedJobs("interested_job", jobs);
  }, [selectedSkills]);

  return (
    <div className=" text-black p-6 rounded-md w-full">
      <p className="text-sm mb-4">
        Select 1 to <span className="font-bold">{maxSelection}</span> jobs you
        are interested in
      </p>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => toggleSkillSelection(skill)}
            className={`px-3 py-2 rounded-full transition text-sm ${
              selectedSkills.includes(skill)
                ? "bg-blue-600 text-white border-white"
                : "bg-white text-blue-600 border-blue-600 border-2"
            }`}
          >
            {skill}
          </button>
        ))}
      </div>
      <div className="mt-6">
        <p className="text-sm font-bold">Selected Jobs:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedSkills.length > 0 ? (
            selectedSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-white text-blue-600 px-3 py-1 rounded-full border border-blue-600"
              >
                {skill}
              </span>
            ))
          ) : (
            <p className="text-blue-700 text-sm">
              No jobs selected yet, please select atleast one job
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillSelector;
