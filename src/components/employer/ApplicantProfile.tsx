import { useState } from "react";
import { profileData } from "../../constant"
import { Button } from "../../../components/button";
import { FaArrowLeft, FaCalendarCheck } from "react-icons/fa";
import { useAppDispatch } from "../../rtk/hooks";
import { setIsViewingApplicantProfile } from "../../rtk/features/employer/jobSlice";

const ApplicantProfile = () => {
    const dispatch = useAppDispatch();
    const [showActions, setShowActions] = useState<boolean>(false);
    const [decision, setDecision] = useState<string>("");

    return (
        <div className="h-full overflow-y-auto">
            {/* Header */}
            <div className="grid grid-cols-3">
                <div onClick={() => dispatch(setIsViewingApplicantProfile(false))} className="flex items-center gap-3">
                    <FaArrowLeft className="text-lg cursor-pointer" />
                </div>
                <h2 className="text-lg font-bold text-center">Profile</h2>
            </div>

            {/* Profile Card */}
            <div className="p-4">
                <div className="flex items-center gap-4">
                    <img
                        src={profileData.image}
                        className="w-16 h-16 rounded-full"
                        alt="profile"
                    />
                    <div>
                        <h3 className="text-lg font-semibold">{profileData.name}</h3>
                        <p className="text-sm text-gray-500">{profileData.role}</p>
                        <p className="text-xs text-gray-400">{profileData.location}</p>
                        <p className="text-xs text-gray-400">{profileData.appliedDate}</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4">
                    <Button
                        className="w-full bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700"
                        onClick={() => setShowActions(true)}
                    >
                        <FaCalendarCheck className="text-lg" />
                        Send Interview Invitation
                    </Button>
                    {/* <div className="flex gap-2">
                        {showActions ? (
                            <>
                                <Button
                                    className="flex-1 bg-green-600 text-white hover:bg-green-700"
                                    onClick={() => setDecision("Accepted")}
                                >
                                    Accept
                                </Button>
                                <Button
                                    className="flex-1 bg-red-600 text-white hover:bg-red-700"
                                    onClick={() => setDecision("Rejected")}
                                >
                                    Reject
                                </Button>
                            </>
                        ) : (
                            <Button
                                className="flex-1 bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700"
                                onClick={() => setShowActions(true)}
                            >
                                <FaCalendarCheck className="text-lg" />
                                Interview Invitation
                            </Button>
                        )}
                    </div> */}
                    {/* <div className="mt-2">
                        <Button
                            variant="outline"
                            className="w-full flex items-center gap-2"
                        >
                            <FaEnvelope className="text-lg" />
                            Message
                        </Button>
                    </div> */}
                </div>
            </div>

            {/* About Me */}
            <div className="border-t-2 border-b-2 border-gray-500 p-5">
                <h4 className="text-md font-bold text-black">About me</h4>
                <p className="text-sm text-gray-600 mt-1">{profileData.about}</p>
            </div>

            {/* Education */}
            <div className="p-5 border-b-2 border-gray-500">
                <h4 className="text-md font-bold text-black">Education</h4>
                {profileData.education.map((edu, index) => (
                    <div key={index} >
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                            <p className="font-bold">{edu.institution}</p>
                            <p className="font-bold">{edu.duration}</p>
                        </div>
                        <p className="text-sm text-gray-500 font-bold">{edu.degree}</p>
                        <ul className="list-disc list-inside text-sm text-gray-500 mt-1">
                            {edu.experiences.map((exp, i) => (
                                <li key={i}>{exp}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


            {/* Work Experience */}
            <div className="p-5 border-b-2 border-gray-500">
                <h4 className="text-md font-bold text-black">Education</h4>
                {profileData.workExperience.map((work, index) => (
                    <div key={index}>
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                            <p className="font-bold">{work.company}</p>
                            <p className="font-bold">{work.duration}</p>
                        </div>
                        <p className="text-sm text-gray-500 font-bold">{work.role}</p>
                        <ul className="list-disc list-inside text-sm text-gray-500 mt-1">
                            {work.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ApplicantProfile