import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../../components/dialog"
import moment from "moment";
import { useGetMyEducationalHistoryQuery } from "../../rtk/services/education";
import { useGetMyWorkHistoryQuery } from "../../rtk/services/work";
import { CgFileDocument } from "react-icons/cg";
import { useGetDocumentsQuery } from "../../rtk/services/application";
import { Link } from "react-router-dom";
import SendInterviewDialog from "../SendInterviewInviteDialog";

export default function ViewApplicantModal({applicant}: any) {
  const { data: response } = useGetMyEducationalHistoryQuery(applicant?.userId);
  const { data: work_response } = useGetMyWorkHistoryQuery(applicant?.userId);
  const { data: documents } = useGetDocumentsQuery({ userId: applicant?.userId, jobId: applicant?.jobId });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="mt-4 w-full border-[1px] border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
        >
          View Profile
        </button>
      </DialogTrigger>
      <DialogContent className="w-[90%] lg:w-[50%] h-[70%] overflow-y-auto">
        <div >
          {/* Header */}
          <div>
            <h2 className="text-lg font-bold text-center">Profile</h2>
          </div>

          {/* Profile Card */}
          <div className="p-4">
            <div className="flex items-center gap-4">
              <img
                src={applicant?.photoUrl}
                className="w-16 h-16 object-cover object-center rounded-full"
                alt="profile picture"
              />
              <div>
                <h3 className="text-lg font-semibold">{applicant?.name}</h3>
                <p className="text-sm text-gray-500">{applicant?.email}</p>
                <p className="text-xs text-gray-400">{applicant?.gender}</p>
                <p className="text-xs text-gray-400">Applied {moment(applicant?.date_applied).fromNow()}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4">
              {applicant?.status === "processing" ? (<SendInterviewDialog />) : (<div className={`w-full flex items-center justify-center p-2 rounded-lg font-bold ${applicant?.status === "rejected" ? "text-red-600 bg-red-200/85" : "text-green-600 bg-green-200/85"}`}>{applicant?.status === "interview" ? "Interview Invitation sent" : `Invitation ${applicant?.status}`}</div>)}
            </div>
          </div>

          {/* About Me */}
          <div className="border-t-2 border-b-2 border-gray-500 p-5">
            <h4 className="text-md font-bold text-black">About me</h4>
            <p className="text-sm text-gray-600 mt-1">{applicant?.about_me}</p>
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
      </DialogContent>
    </Dialog>
  )
}
