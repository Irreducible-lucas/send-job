import { useAppDispatch } from "../rtk/hooks";
import { FaTrashAlt, FaBriefcase, FaRegEdit, FaBoxOpen } from "react-icons/fa";
import { useDeleteJobByIdMutation, useUpdateJobInfoMutation } from "../rtk/services/jobs";
import { setEditJobModalOpen, setJobInfo } from "../rtk/features/user/jobSlice";
import { Job } from "../type";
import { Bounce, toast } from "react-toastify";

const CompanySavedDraft = ({ jobs }: any) => {
  const dispatch = useAppDispatch();
  const [deleteJobById, { isLoading: isDeleting }] = useDeleteJobByIdMutation();
  const [postJobById, { isLoading: isPosting }] = useUpdateJobInfoMutation();

  const editJob = (job: any) => {
    dispatch(setEditJobModalOpen(true));
    dispatch(setJobInfo(job));
  }

  const postJob = async (job_id: number) => {
    try {
      await postJobById({ id: job_id, data: { posted: true } })
      toast.success('job posted successfully', {
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
      toast.error('Sorry, error occured while posting job', {
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
    }
  };

  const deleteJob = async (jobId: number) => {
    try {
      await deleteJobById(jobId)
      toast.success('job deleted successfully', {
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
      toast.error('Sorry, error occured while deleting job', {
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
    }
  };

  return (
    <div className="p-4 md:p-6 min-h-screen">
      {jobs?.length === 0 && (<div className="bg-white rounded-lg w-full grid place-items-center text-center p-8 mt-8 gap-3">
        <FaBoxOpen size={100} className="text-blue-600" />
        <h3>No saved jobs at the moment</h3>
        <p>Click on the <span className="font-bold">Add Job Button</span> at the bottom right corner to create a new Job</p>
      </div>)}
      {/* Draft jobs list */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {jobs?.map((job: Job) => (
          <div
            key={job.id}
            className="bg-white p-4 lg:p-6 rounded-lg shadow-md border"
          >
            <div className="flex gap-4">
              <div className="h-[100px] w-[100px] p-2 rounded-lg border-gray-200 bg-white border-2">
                {job?.employer_logo === "" ? (<div className="h-full grid place-items-center w-full rounded-full bg-blue-700">
                  <FaBriefcase className="text-white" size={50} />
                </div>) : (<img src={job?.employer_logo} alt="Logo" className="w-10 h-10" />)}
              </div>
              <div className="flex flex-col justify-center gap-2">
                <h3 className="text-lg font-semibold">{job?.job_title}</h3>
                <p className="text-sm text-gray-500">
                  {job?.employer_name}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <div className="bg-blue-50 text-blue-600 text-sm rounded-lg py-1 px-3">
                    {job?.job_employment_type}
                  </div>
                  <div className="bg-blue-50 text-blue-600 text-sm rounded-lg py-1 px-3">
                    {job?.workplace_type}
                  </div>
                  <div className="bg-gray-100 text-black text-sm rounded-lg py-1 px-3">
                    {job?.job_city}{", "}{job?.job_state}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-5 gap-5">
              <button
                onClick={() => editJob(job)}
                className="flex items-center justify-center border-[1px] rounded-xl py-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaRegEdit className="mr-2" /> Edit
              </button>
              <button
                onClick={() => deleteJob(job.id)}
                disabled={isDeleting ? true : false}
                className="flex items-center justify-center border-[1px] rounded-xl py-2 disabled:bg-red-100 border-red-500 text-red-500 hover:bg-red-600 hover:text-white"
              >
                <FaTrashAlt className="mr-2" /> {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
            <button
              onClick={() => postJob(job.id)}
              className="flex items-center justify-center rounded-lg py-2 w-full mt-4 text-white bg-blue-600 hover:bg-blue-800 hover:text-white"
            >{isPosting ? "Posting..." : "Post Job"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CompanySavedDraft;
