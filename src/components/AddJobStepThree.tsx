import React from "react";

interface Step3Props {
  screeningQuestions: { question: string; type: string }[];
  addQuestion: () => void;
  handleQuestionChange: (index: number, value: string) => void;
  handleTypeChange: (index: number, value: string) => void;
}

const AddJobStepThree: React.FC<Step3Props> = ({
  screeningQuestions,
  addQuestion,
  handleQuestionChange,
  handleTypeChange,
}) => {
  return (
    <div className="flex-grow overflow-auto p-4 max-h-[60vh]  bg-white">
      <div className="mb-4">
        <h3 className=" font-semibold">Add screening questions</h3>
        <p className="text-gray-500 text-sm">We recommend adding 3 or more questions. Applicants must answer each question.</p>
      </div>
      {screeningQuestions.map((question, index) => (
        <div key={index} className="mb-4">
          <div className="mb-2">
            <label
              htmlFor={`question-${index}`}
              className="block text-sm font-medium text-gray-700"
            >
              Question {index + 1}
            </label>
            <input
              id={`question-${index}`}
              type="text"
              value={question.question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              placeholder={`Enter question ${index + 1}`}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
            />
          </div>
          <div>
            <label
              htmlFor={`type-${index}`}
              className="block text-sm font-medium text-gray-700"
            >
              Question Type
            </label>
            <select
              id={`type-${index}`}
              value={question.type}
              onChange={(e) => handleTypeChange(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
            >
              <option value="">Select Question Type</option>
              <option value="Text">Text</option>
              <option value="Multiple Choice">Multiple Choice</option>
              <option value="File Upload">File Upload</option>
            </select>
          </div>
        </div>
      ))}

      <button
        onClick={addQuestion}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Add Question
      </button>
    </div>
  );
};

export default AddJobStepThree;
