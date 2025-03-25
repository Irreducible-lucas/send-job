import { FaBriefcase } from "react-icons/fa"
import { useAppSelector } from "../rtk/hooks"
import { IoMdPin } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { useUpdateApplicationMutation } from "../rtk/services/application";
import { toast } from "react-toastify";

const EmployeeJobDetails = ({ onClose }: any) => {
  const { jobInfo } = useAppSelector((state) => state.job);
  const currencyFormat = new Intl.NumberFormat("en-Us");

  const [updateApplication, { isLoading }] = useUpdateApplicationMutation();


  const acceptInvitation = async () => {
    try {
      const update = {
        status: "accepted"
      }
      await updateApplication({ appId: jobInfo?.appId, update: update });
      toast.success("Invitation accepted")
    } catch (error) {
      toast.error("error occured while accepting invitation")
    }
  }

  const rejectInvitation = async () => {
    try {
      const update = {
        status: "rejected"
      }
      await updateApplication({ appId: jobInfo?.appId, update: update });
      toast.success("Invitation rejected")
    } catch (error) {
      toast.error("error occured while rejecting invitation")
    }
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] lg:w-[50%] relative h-[90%] max-h-[90%]">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold mx-auto">Job Details</h2>
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

          <div className="h-[450px] overflow-y-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="rounded-lg border-gray-200 bg-white border-2">
                {jobInfo?.employer_logo === "" ? (<div className="p-2 h-[100px] w-[100px] grid place-items-center rounded-full bg-blue-700">
                  <FaBriefcase className="text-white" size={50} />
                </div>) : (<img src={jobInfo?.employer_logo} alt="Logo" className="h-[100px] w-[100px] object-cover object-center" />)}
              </div>
              <div className="flex flex-1 flex-col gap-3 w-full">
                <h3 className="text-xl font-semibold capitalize">{jobInfo?.job_title}</h3>
                <div className="flex items-center gap-4">
                  <p className="text-base text-blue-600">
                    {jobInfo?.employer_name}
                  </p>
                  <div className="flex items-center gap-1 text-gray-500"><IoMdPin size={20} /> <span>{jobInfo.job_city}, {jobInfo.job_state}, {jobInfo.job_country}</span></div>
                </div>
                <div className="flex items-center flex-wrap gap-4">
                  <div className="bg-blue-100 text-blue-600 text-sm py-1 px-2 rounded-lg">{!!jobInfo?.workplace_type ? jobInfo?.workplace_type : !!jobInfo?.job_is_remote ? "Remote" : "Onsite"}</div>
                  <div className="bg-blue-100 text-blue-600 text-sm py-1 px-2 rounded-lg">{jobInfo?.job_employment_type}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <FaRegCalendarAlt size={20} /> <span>{moment(jobInfo?.updatedAt).format("MMM Do YYYY")}</span>
                  </div>
                </div>
              </div>
            </div>

            {jobInfo?.status === "interview" && (
              <div className="grid grid-cols-2 gap-8 mb-8">
                <button onClick={acceptInvitation} className="bg-green-600 text-white text-center p-2 rounded-lg hover:bg-green-800">Accept</button>
                <button onClick={rejectInvitation} className="bg-red-600 text-white text-center p-2 rounded-lg hover:bg-red-800">Reject</button>
              </div>
            )}

            <div className="text-gray-500 text-base flex flex-col gap-4 pb-4">
              <div>
                <h2 className="font-bold text-black mb-2">Job Description</h2>
                <div>{jobInfo?.job_description}</div>
              </div>
              <div>
                <h2 className="font-bold text-black mb-2">Job Experience</h2>
                <div>{jobInfo?.experience} years working experience</div>
              </div>
              {jobInfo?.job_required_skills.startsWith("[") && (
                <div>
                  <h2 className="font-bold text-black mb-2">Skills</h2>
                  <div className="flex gap-3 flex-wrap">{JSON.parse(jobInfo?.job_required_skills).map((skill: string) => <div className="bg-blue-100 rounded-lg text-blue-600 py-1 px-3">{skill}</div>)}</div>
                </div>
              )}
              <div>
                <h2 className="font-bold text-black mb-2">Salary Expectation</h2>
                <div>{jobInfo?.job_salary_currency} {currencyFormat.format(jobInfo?.job_min_salary)} - {currencyFormat.format(jobInfo?.job_max_salary)}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EmployeeJobDetails