import { Job } from "../type";
import { FaBookmark, FaArrowRight, FaBriefcase } from "react-icons/fa";

interface Props {
  job: Job;
  handleNavigate: (val: Job) => void;
  saveJob: (val: Job) => void;
  loading: boolean;
}

const FeaturedJobCard = ({ job, handleNavigate, saveJob, loading }: Props) => {
  const {
    employer_logo,
    employer_name,
    job_city,
    job_state,
    job_title,
    job_min_salary,
    job_max_salary,
    job_employment_type,
    posted,
    job_salary_currency,
  } = job;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full border border-gray-200 flex flex-col gap-4">
      <div className="flex gap-2 w-full">
        <div className="w-[40px] h-[40px]">
          {employer_logo === "" ? (<div className="w-[40px] h-[40px] rounded-full bg-blue-600 grid place-items-center">
            <FaBriefcase size={20} className="text-white"/>
          </div>) : (<img
            src={employer_logo}
            alt={employer_name}
            className="w-[40px] h-[40px] rounded-full"
          />)}
        </div>
        <div className="flex-1">
          <p className="text-gray-800 font-bold">{job_title}</p>
          <p className="text-gray-500 text-xs">{job_salary_currency + job_min_salary + " - " + job_max_salary + " /month"}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1">
          <h3 className="text-black font-semibold text-base">
            {employer_name}
          </h3>
          <p className="text-gray-500 text-sm">
            {job_city + ", " + job_state}
          </p>
        </div>
        <div className="p-2 rounded-lg text-sm bg-blue-100">
          <p className="text-blue-600 font-medium">{job_employment_type}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            handleNavigate(job);
          }}
          className="flex flex-1 items-center justify-center text-sm border gap-2 border-blue-600 text-blue-600 rounded-lg px-4 py-2 hover:bg-blue-600 hover:text-white transition-all"
        >
          <span>Apply</span>
          <FaArrowRight />
        </button>
        <button
          onClick={() => {
            saveJob(job);
          }}
          disabled={loading}
          className="flex items-center space-x-2 text-sm border-2 border-gray-300 rounded-lg px-4 py-2 hover:border-blue-600 transition-all"
        >
          {loading ? (<span className="text-blue-600">saving...</span>) : (<>
            <FaBookmark className="text-gray-600" />
            <span>Save</span></>)
          }
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
