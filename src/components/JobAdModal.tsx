import React, { useState } from "react";
import AddJobStepperOne from "./AddJobStepperOne";
import AddJobStepperTwo from "./AddJobStepperTwo";
import AddJobStepThree from "./AddJobStepThree";

interface JobAdModalProps {
  onSave: (job: any) => void;
  onClose: () => void;
}

const JobAdModal: React.FC<JobAdModalProps> = ({ onSave, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    workplace: "",
    jobType: "",
    specialization: "",
    role: "",
    experience: "",
    postingSite: "",
    budget: {
      currency: "",
      min: "",
      max: "",
      displaySalary: false,
    },
  });

  const [jobDescription, setJobDescription] = useState("");
  const [skills, setSkills] = useState<string[]>(["Figma (software)"]);
  const [newSkill, setNewSkill] = useState("");
  const [screeningQuestions, setScreeningQuestions] = useState([
    { question: "", type: "" },
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBudgetChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      budget: {
        ...formData.budget,
        [name]: type === "checkbox" ? checked : value,
      },
    });
  };

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSave = () => {
    if (!formData.title.trim()) {
      alert("Job title cannot be empty.");
      return;
    }
    onSave({ ...formData, jobDescription, skills, screeningQuestions });
    onClose();
  };

  const addQuestion = () => {
    setScreeningQuestions([...screeningQuestions, { question: "", type: "" }]);
  };

  const handleQuestionChange = (index: number, value: string) => {
    const updatedQuestions = [...screeningQuestions];
    updatedQuestions[index].question = value;
    setScreeningQuestions(updatedQuestions);
  };

  const handleTypeChange = (index: number, value: string) => {
    const updatedQuestions = [...screeningQuestions];
    updatedQuestions[index].type = value;
    setScreeningQuestions(updatedQuestions);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold mx-auto">Job Ads</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <hr className="border-gray-300 my-5" /> {/* Line below the title */}
        {step === 1 && (
          <AddJobStepperOne
            formData={formData}
            handleChange={handleChange}
            handleBudgetChange={handleBudgetChange}
          />
        )}
        {step === 2 && (
          <AddJobStepperTwo
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            skills={skills}
            newSkill={newSkill}
            setNewSkill={setNewSkill}
            addSkill={addSkill}
            removeSkill={removeSkill}
          />
        )}
        {step === 3 && (
          <AddJobStepThree
            screeningQuestions={screeningQuestions}
            addQuestion={addQuestion}
            handleQuestionChange={handleQuestionChange}
            handleTypeChange={handleTypeChange}
          />
        )}
        <hr className="border-gray-300 my-3" /> {/* Line above the buttons */}
        <div className="flex justify-between gap-3 mt-4">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition ml-auto"
            >
              Save Job
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobAdModal;
