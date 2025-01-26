// SkillSelector.tsx
import React, { useState } from "react";

interface SkillSelectorProps {
  skills: string[];
  maxSelection: number;
}

const SkillSelector: React.FC<SkillSelectorProps> = ({
  skills,
  maxSelection,
}) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkillSelection = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else if (selectedSkills.length < maxSelection) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="bg-blue-600 text-white p-6 rounded-md w-full max-w-md">
      <p className="text-sm mb-4">
        Select up to <span className="font-bold">{maxSelection}</span> skills
      </p>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => toggleSkillSelection(skill)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedSkills.includes(skill)
                ? "bg-white text-blue-600 border-blue-600"
                : "bg-blue-600 text-white border-white"
            }`}
          >
            {skill}
          </button>
        ))}
      </div>
      <div className="mt-6">
        <p className="text-sm">Selected Skills:</p>
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
            <p className="text-gray-300 text-sm">No skills selected yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillSelector;
