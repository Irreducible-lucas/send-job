import { FaArrowLeft } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { setIsViewingApplicantProfile } from "../../rtk/features/user/jobSlice";
import moment from "moment";
import { useGetMyEducationalHistoryQuery } from "../../rtk/services/education";
import { useGetMyWorkHistoryQuery } from "../../rtk/services/work";
import { CgFileDocument } from "react-icons/cg";
import { useGetDocumentsQuery } from "../../rtk/services/application";
import { Link } from "react-router-dom";
import SendInterviewDialog from "../SendInterviewInviteDialog";

const ApplicantProfile = () => {
    const dispatch = useAppDispatch();
    const { applicantInfo, jobInfo } = useAppSelector((state) => state.job);
    const { data: response } = useGetMyEducationalHistoryQuery(applicantInfo?.userId);
    const { data: work_response } = useGetMyWorkHistoryQuery(applicantInfo?.userId);
    const { data: documents } = useGetDocumentsQuery({ userId: applicantInfo?.userId, jobId: jobInfo?.id });

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
                        src={applicantInfo?.photoUrl}
                        className="w-16 h-16 object-cover object-center rounded-full"
                        alt="profile picture"
                    />
                    <div>
                        <h3 className="text-lg font-semibold">{applicantInfo?.name}</h3>
                        <p className="text-sm text-gray-500">{applicantInfo?.email}</p>
                        <p className="text-xs text-gray-400">{applicantInfo?.gender}</p>
                        <p className="text-xs text-gray-400">Applied {moment(applicantInfo?.date_applied).fromNow()}</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4">
                    {applicantInfo?.status === "processing" ? (<SendInterviewDialog />) : (<div className={`w-full flex items-center justify-center p-2 rounded-lg font-bold ${applicantInfo?.status === "rejected" ? "text-red-600 bg-red-200/85" : "text-green-600 bg-green-200/85"}`}>{applicantInfo?.status === "interview" ? "Interview Invitation sent" : `Invitation ${applicantInfo?.status}`}</div>)}
                </div>
            </div>

            {/* About Me */}
            <div className="border-t-2 border-b-2 border-gray-500 p-5">
                <h4 className="text-md font-bold text-black">About me</h4>
                <p className="text-sm text-gray-600 mt-1">{applicantInfo?.about_me}</p>
            </div>

            {/* Education */}
            <div className="p-5 border-b-2 border-gray-500">
                <h4 className="text-md font-bold text-black mb-4">Education</h4>
                {response?.data?.map((edu: any) => (
                    <div key={edu?.id} className="mb-4" >
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                            <p className="font-bold">{edu?.school}</p>
                            <p className="font-bold">{moment(edu?.startDate).format("YYYY")} - {edu?.endDate === "Present" ? "Present" : moment(edu?.endDate).format("YYYY")}</p>
                        </div>
                        <p className="text-sm text-gray-500 font-semibold">{edu?.educationalLevel} - {edu?.department}</p>
                    </div>
                ))}
            </div>

            {/* Work Experience */}
            <div className="p-5 border-b-2 border-gray-500">
                <h4 className="text-md font-bold text-black mb-4">Work Experience</h4>
                {work_response?.data?.map((work: any) => (
                    <div key={work?.id} className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                            <p className="font-bold">{work.companyName}</p>
                            <p className="font-bold">{moment(work?.startDate).format("YYYY")} - {work?.endDate === "Present" ? "Present" : moment(work?.endDate).format("YYYY")}</p>
                        </div>
                        <p className="text-sm text-gray-500 font-bold">{work.jobTitle}</p>
                        <ul className="list-disc list-inside text-sm text-gray-500 mt-1">
                            {JSON.parse(work?.jobDescription).map((description: any) => (
                                <li key={description?.id}>{description?.text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Uploaded File */}
            <div className="p-4">
                <h4 className="text-md font-bold text-black mb-4">Uploaded Documents</h4>
                <div className="grid grid-cols-3">
                    {documents?.map((document: any) => (
                        <Link key={document?.id} to={document?.url} target="_blank">
                            <div className="group flex flex-col gap-2 items-center bg-blue-50 hover:bg-blue-600 p-4 rounded-lg">
                                <CgFileDocument size={50} className="text-blue-600 group-hover:text-white" />
                                <p className="group-hover:text-white">{document?.type}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ApplicantProfile