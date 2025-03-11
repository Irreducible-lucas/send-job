import React, { useState } from "react";
import AddJobStepperOne from "./AddJobStepperOne";
import AddJobStepperTwo from "./AddJobStepperTwo";
import AddJobStepThree from "./AddJobStepThree";
import { Bounce, toast } from "react-toastify";
import { useAppSelector } from "../rtk/hooks";
import Axios from "../axios"
import { useCreateJobMutation } from "../rtk/services/jobs";

interface JobAdModalProps {
  onClose: () => void;
}

const JobAdModal: React.FC<JobAdModalProps> = ({ onClose }) => {
  const [createJobMutation, { isLoading: isCreatingJob }] = useCreateJobMutation();
  const { currentUser } = useAppSelector((state) => state.auth)
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    workplace_type: "",
    employment_type: "",
    city: "",
    state: "",
    country: "",
    experience: "",
    currency: "",
    min_salary: "",
    max_salary: "",
  });

  const [quiz, setQuiz] = useState<any>([]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  // const [isCorrect, setIsCorrect] = useState("0");
  // const [showQuiz, setShowQuiz] = useState(false); 

  // Function to create a job
  const createJob = async (jobData: any) => {
    try {
      const response = await createJobMutation(jobData);
      return response.data;
    } catch (error) {
      toast.error('Sorry, error occured while creating job', {
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
  };

  // Function to create a quiz with the job ID
  const createQuiz = async (jobId: any, quizData: any) => {
    const data = {
      jobId: jobId,
      quiz: quizData
    }
    try {
      const response = await Axios.post('/jobs/test', data);
      return response.data;  // Assuming response.data contains the quiz details
    } catch (error) {
      toast.error('Sorry, error occured while creating job test', {
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
  };

  const addQuestion = () => {
    if (question === "") {
      toast.warn('Question field cannot be empty.', {
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

    if (options.length < 2) {
      toast.warn('Options must be more than two(2)', {
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

    const checkEmptyOption = options.filter((option: any) => option.option === "");

    if (checkEmptyOption.length > 0) {
      toast.warn('An Option field cannot be empty', {
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

    const newQuiz = {
      question: question,
      options: options,
    };

    setQuiz((prevQuiz: any) => [...prevQuiz, newQuiz]);
    setQuestion("");
    setOptions([]);
  };

  // const cancelQuestion = () => {
  //   setQuestion("");
  //   setOptions([]);
  //   setIsCorrect("0");
  //   setShowQuiz(false);
  // };


  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const handleSave = async () => {
    if (!formData.title.trim()) {
      alert("Job title cannot be empty.");
      return;
    }
    if (quiz.length === 0) {
      toast.warn('Please add screening questions', {
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

    if (quiz.length < 3) {
      toast.warn('Please add atleast 3 screening questions', {
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

    const job_data = { ...formData, employer_name: currentUser?.company_name, employer_logo: currentUser?.company_logo_url, employer_website: currentUser?.company_website, companyId: currentUser?.id, required_skills: JSON.stringify(skills) };
    try {
      const res = await createJob(job_data);
      await createQuiz(res?.job?.id, quiz);
      toast.success('Job created successfully', {
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
      console.log("Error:", error)
      toast.error('Sorry, error occured.', {
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
    onClose();
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] lg:w-[50%] relative">
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
          />
        )}
        {step === 2 && (
          <AddJobStepperTwo
            formData={formData}
            handleChange={handleChange}
            skills={skills}
            newSkill={newSkill}
            setNewSkill={setNewSkill}
            addSkill={addSkill}
            removeSkill={removeSkill}
          />
        )}
        {step === 3 && (
          <AddJobStepThree
            setOptions={setOptions}
            addQuestion={addQuestion}
            quiz={quiz}
            options={options}
            question={question}
            setQuestion={setQuestion}
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
              {isCreatingJob ? "Saving job..." : "Save Job"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobAdModal;
