import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../../../components/radio-group"
import { useUpdateTestQuestionMutation } from "../../rtk/services/jobs";
import { Bounce, toast } from "react-toastify";

const TestCard = ({ test, index, total }: any) => {
    const [question, setQuestion] = useState<string>(test?.question);
    const [options, setOptions] = useState(test?.options);
    const [updateTestQuestionMutation, { isLoading: isUpdatingTestQuestion }] = useUpdateTestQuestionMutation();

    const updateQuestion = async () => {
        const newQuiz = {
            question_id: test.id,
            job_id: test?.job_id,
            question: question,
            options: options,
        };

        try {
            await updateTestQuestionMutation(newQuiz);
            toast.success('Question updated successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } catch (error) {
            toast.error('Sorry, error occured while updating question', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }
    }

    const inputHandler = (text: any, id: number) => {
        const _options = options.map((option: any) => option.id === id ? { ...option, option: text } : option);
        setOptions(_options);
    };

    const answerHandler = (e: React.SetStateAction<string>) => {
        const _options = options.map((option: any) => ({
            ...option,
            correct: `option-${option.id}` === e,
        }));
        setOptions(_options);
    };

    return (
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="mb-4">
                <label
                    htmlFor={"question"}
                    className="block text-sm font-medium text-blue-700"
                >
                    Question {index + 1} of {total}
                </label>
                <input
                    id={"question"}
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder={`Enter question`}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
                />
            </div>
            <div>
                <label
                    className="block text-sm font-medium text-blue-700 mb-2"
                >
                    Answer Options:
                </label>
                <RadioGroup onValueChange={answerHandler}>
                    {options.map((option: { id: number, option: string, correct: boolean }) => (
                        <div className="flex items-center gap-4" key={option.id}>
                            <RadioGroupItem value={`option-${option.id}`} id={`option-${option.id}`} checked={option.correct} className="w-6 h-6 text-blue-700" />
                            <input type="text" value={option.option} onChange={(e) => inputHandler(e.target.value, option.id)} placeholder={`Enter option-${option.id}`} className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1" />
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <div className="flex justify-end">
                <button
                    onClick={updateQuestion}
                    disabled={isUpdatingTestQuestion ? true : false}
                    className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition`}
                >
                    {isUpdatingTestQuestion ? "updating..." : "Update"}
                </button>
            </div>
        </div>
    )
}

export default TestCard