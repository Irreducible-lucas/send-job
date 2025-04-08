import React from "react";
import { RadioGroup, RadioGroupItem } from "../../components/radio-group"

interface Step3Props {
  quiz: any,
  options: any;
  setOptions: any;
  addQuestion: any;
  question: any;
  setQuestion: any;
}

const AddJobStepThree: React.FC<Step3Props> = ({
  quiz,
  options,
  setOptions,
  addQuestion,
  question,
  setQuestion
}) => {

  const addOptionHandler = () => {
    const _options: any = [...options];
    if (_options.length == 0) {
      _options.push({
        key: options.length,
        option: "",
        correct: true,
      });
    } else {
      _options.push({
        key: options.length,
        option: "",
        correct: false,
      });
    }

    setOptions(_options);
  };

  const deleteOptionHandler = (key: number) => {
    const _options = options.filter((option: any, index: number) => index !== key);
    setOptions(_options);
  };

  const inputHandler = (text: any, key: string | number) => {
    const _options: any = [...options];
    _options[key].option = text;
    setOptions(_options);
  };

  const answerHandler = (e: React.SetStateAction<string>) => {
    const _options: any = [...options];
    for (let i = 0; i < _options.length; i++) {
      if (`option-${_options[i].key}` == e) {
        _options[i].correct = true;
      } else {
        _options[i].correct = false;
      }
    }
    setOptions(_options);
  };
  return (
    <div className="flex-grow overflow-auto p-4 max-h-[60vh]  bg-white">
      <div className="mb-4">
        <h3 className=" font-semibold">Add screening questions</h3>
        <p className="text-gray-500 text-sm">We recommend adding 3 or more questions. Applicants must answer each question.</p>
      </div>
      {/* {quiz.map((question: any, index: number) => (
        <div key={index} className="mb-4">
          
        </div>
      ))} */}

      <div>
        <div className="mb-2">
          <label
            htmlFor={"question"}
            className="block text-sm font-medium text-gray-700"
          >
            Question {quiz.length + 1}
          </label>
          <input
            id={"question"}
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={`Enter question ${quiz.length + 1}`}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
          >
            Answer Options:
          </label>
          <RadioGroup onValueChange={(e) => answerHandler(e)}>
            {options.map((option: { key: number, option: string, correct: boolean }) => (
              <div className="flex items-center gap-4" key={option.key}>
                <RadioGroupItem value={`option-${option.key}`} id={`option-${option.key}`} checked={option.correct} className="w-6 h-6 text-blue-700" />
                <input type="text" value={option.option} onChange={(e) => inputHandler(e.target.value, option.key)} placeholder={`Enter option-${option.key}`} className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            ))}
          </RadioGroup>
          <button
            onClick={addOptionHandler}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Add Option
          </button>

        </div>
      </div>
      <div className="flex justify-center mt-4">
      <button
        onClick={addQuestion}
        className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-800 transition"
      >
        Add Question
      </button>
      </div>
    </div>
  );
};

export default AddJobStepThree;
