import { FaBookmark, FaArrowRight, FaBriefcase } from "react-icons/fa";

interface Props {
    job: any;
    saved: boolean;
}

const EmployeeJobCard = ({ job, saved }: Props) => {
    const COLORS: any = {
        "processing": "bg-slate-400 text-white px-3 py-1 rounded-lg text-sm",
        "interview": "bg-blue-600 text-white px-3 py-1 rounded-lg text-sm",
        "accepted": "bg-green-600 text-white px-3 py-1 rounded-lg text-sm",
        "rejected": "bg-red-600 text-white px-3 py-1 rounded-lg text-sm",
    }
    return (
        <div className="bg-white hover:border-2 hover:border-blue-600 hover: cursor-pointer shadow-md rounded-lg p-4 w-full border border-gray-200 flex flex-col gap-4">
            <div className="flex gap-2 w-full items-center">
                <div className="w-[40px] h-[40px]">
                    {job?.employer_logo === "" ? (<div className="w-[40px] h-[40px] rounded-full bg-blue-600 grid place-items-center">
                        <FaBriefcase size={20} className="text-white" />
                    </div>) : (<img
                        src={job?.employer_logo}
                        alt={job?.employer_name}
                        className="w-[40px] h-[40px] rounded-full"
                    />)}
                </div>
                <div className="flex-1">
                    <p className="text-gray-800 font-bold">{job?.job_title}</p>
                    <p className="text-gray-500 text-xs">{job?.job_salary_currency + job?.job_min_salary + " - " + job?.job_max_salary + " /month"}</p>
                </div>
                {job?.status && (<div className={COLORS[job.status]}>Status:<span className="ml-2 font-semibold">{job.status === "processing" ? "waiting" : job.status}</span></div>)}
            </div>

            <div className="flex items-center gap-2">
                <div className="flex-1">
                    <h3 className="text-black font-semibold text-base">
                        {job?.employer_name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                        {job?.job_city + ", " + job?.job_state}
                    </p>
                </div>
                <div className="p-2 rounded-lg text-sm bg-blue-100">
                    <p className="text-blue-600 font-medium">{job?.job_employment_type}</p>
                </div>
            </div>
            {!job?.status && (
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => {
                            // handleNavigate(job);
                        }}
                        className="flex flex-1 items-center justify-center text-sm border gap-2 border-blue-600 text-blue-600 rounded-lg px-4 py-2 hover:bg-blue-600 hover:text-white transition-all"
                    >
                        <span>Apply</span>
                        <FaArrowRight />
                    </button>
                    <button
                        onClick={() => {
                            // saveJob(job);
                        }}
                        className="flex items-center space-x-2 text-blue-600 text-sm border border-gray-300 rounded-lg px-4 py-2 hover:border-blue-600 hover:border-2 transition-all"
                    >
                        {saved ? (<><FaBookmark className="text-blue-600" />
                            <span>Saved</span></>) : (<><FaBookmark className="text-gray-600" />
                                <span>Save</span></>)}
                    </button>
                </div>
            )}
        </div>
    );
};

export default EmployeeJobCard;
