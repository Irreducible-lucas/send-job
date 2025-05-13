import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faLocationDot,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Job } from "../type";
import moment from "moment";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../rtk/hooks";
import { setJobAppModalOpen, setJobInfo } from "../rtk/features/user/jobSlice";
import { FaBriefcase } from "react-icons/fa";
import { useGetApplicationStatusQuery } from "../rtk/services/application";
import { useNavigate } from "react-router-dom";

interface Props {
  job: Job;
  showButton?: boolean;
}

const JobDetailContent = ({ job, showButton = true }: Props) => {
  const { token, currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const currencyFormat = new Intl.NumberFormat("en-Us");
  const { data: applied, isLoading } = useGetApplicationStatusQuery({
    userId: currentUser?.id,
    jobId: job?.id,
  });

  let navigate = useNavigate();

  const applyToJob = () => {
    if (!token) {
      // toast.error("Please login to apply for job");
      navigate(`/login`);
      return;
    }
    dispatch(setJobInfo(job));
    dispatch(setJobAppModalOpen(true));
  };

  return (
    <div>
      <div className="space-y-6 ">
        {/* Job Header */}
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{job?.job_title}</h1>
            <div className="flex items-center space-x-3">
              {/* Apply Now Button */}
              {showButton && (
                <button
                  onClick={() => applyToJob()}
                  disabled={applied?.status}
                  className="bg-blue-600 disabled:bg-blue-600/50 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  {applied?.status ? "Applied" : "Apply Now"}
                </button>
              )}

              {/* Bookmark Icon */}
              {/* <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="w-5 h-5 text-gray-600"
                />
              </button> */}

              {/* Share Icon */}
              {/* <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition">
                <FontAwesomeIcon
                  icon={faShareAlt}
                  className="w-5 h-5 text-gray-600"
                />
              </button> */}
            </div>
          </div>
          <hr className="my-4" />

          <div className="flex items-center gap-5">
            {job?.employer_logo === "" ? (
              <div className="w-16 h-16 rounded-full bg-blue-600 grid place-items-center">
                <FaBriefcase size={30} className="text-white" />
              </div>
            ) : (
              <img
                src={job.employer_logo}
                className="w-16 h-16 rounded-full"
                alt="Company Logo"
              />
            )}

            <div>
              <div className="flex items-center gap-3">
                <p className="text-black text-sm">{job.employer_name}</p>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 h-4 text-gray-600"
                  />
                  <p className="text-sm">{job.job_city}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 text-xs font-medium text-blue-500 bg-blue-100 rounded">
                  {job.job_employment_type}
                </span>
                <span className="px-2 py-1 text-xs font-medium text-green-500 bg-green-100 rounded">
                  {job.job_is_remote ? "Remote" : "Onsite"}
                </span>
                <span className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded">
                  {job.experience}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <p className="mt-2 text-xs text-gray-500">{`${moment(
                  job.createdAt
                ).format("MMMM Do YYYY, h:mm:ss")}`}</p>
              </div>
              {/* <div className="flex gap-1 mt-[6px]">
                {jobDetails.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="text-black bg-gray-300 p-1 rounded-sm"
                  >
                    {tag}
                  </p>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* About Section */}
        
        <div>
          <h2 className="text-xl font-semibold mb-2">About this role</h2>
        <hr />
          {/* <h2 className="font-bold text-black mb-2">Job Description</h2> */}
        </div>
          <div
            className="text-black"
            dangerouslySetInnerHTML={{ __html: job?.job_description }}
          />
        <div>
          <h2 className="font-bold text-black mb-2">Job Experience</h2>
          <div>{job?.experience} years working experience</div>
        </div>
        {job?.job_required_skills.startsWith("[") && (
          <div>
            <h2 className="font-bold text-black mb-2">Skills</h2>
            <div className="flex gap-3 flex-wrap">
              {JSON.parse(job?.job_required_skills).map(
                (skill: string, index: any) => (
                  <div
                    key={index}
                    className="bg-blue-100 rounded-lg text-blue-600 py-1 px-3"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>
        )}
        <div>
          <h2 className="font-bold text-black mb-2">Salary Expectation</h2>
          <div>
            <span className="font-bold">{job?.job_salary_currency}</span>{" "}
            {currencyFormat.format(job?.job_min_salary)} -{" "}
            {currencyFormat.format(job?.job_max_salary)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailContent;
