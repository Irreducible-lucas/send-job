import React, { useState } from "react";
import AddJobStepperOne from "./AddJobStepperOne";
import AddJobStepperTwo from "./AddJobStepperTwo";
import { Bounce, toast } from "react-toastify";
import { useAppSelector } from "../rtk/hooks";
import { useUpdateJobByIdMutation } from "../rtk/services/jobs";
import EditJobStepThree from "./EditJobStepThree";

interface JobAdModalProps {
    onClose: () => void;
}

const EditJobAdModal: React.FC<JobAdModalProps> = ({ onClose }) => {
    const { jobInfo } = useAppSelector((state) => state.job);
    const [updateJobMutation, {isLoading: isUpdatingJob}] = useUpdateJobByIdMutation();
    const { currentUser } = useAppSelector((state) => state.auth);
    
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: jobInfo?.job_title,
        description: jobInfo?.job_description,
        workplace_type: jobInfo?.workplace_type,
        employment_type: jobInfo?.job_employment_type,
        city: jobInfo?.job_city,
        state: jobInfo?.job_state,
        country: jobInfo?.job_country,
        experience: jobInfo?.experience,
        currency: jobInfo?.job_salary_currency,
        min_salary: jobInfo?.job_min_salary,
        max_salary: jobInfo?.job_max_salary,
    });

    const [skills, setSkills] = useState<string[]>(JSON.parse(jobInfo?.job_required_skills));
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

        const job_data = { ...formData, employer_name: currentUser?.company_name, employer_logo: currentUser?.company_logo_url, employer_website: currentUser?.company_website, companyId: currentUser?.id, required_skills: JSON.stringify(skills) };
        try {
            await updateJobMutation({id: jobInfo.id, data: job_data});
            toast.success('Job data updated successful', {
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
            toast.error('Sorry, error occured while updating job', {
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
                    <h2 className="text-lg font-semibold mx-auto">Edit Job Ads</h2>
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
                    <EditJobStepThree jobId={jobInfo?.id} />
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
                            {isUpdatingJob ? "updating job..." : "Update Job"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditJobAdModal;
