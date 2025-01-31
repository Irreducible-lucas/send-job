import { RootState } from "../rtk";
import { InterestedJobType } from "../type";
import { AddInterestedJob } from "./AddInterestedJob";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeInterestedJob } from "../rtk/features/user/jobInterestSlice";

const SignUpStepTwo = () => {
  const jobs = useSelector((state: RootState) => state.jobInterests.jobList);

  const dispatch = useDispatch();
  const deleteJob = (jobId: number) => {
    dispatch(removeInterestedJob(jobId));
  };
  return (
    <div className="w-full h-[250px] overflow-auto">
      <p className="text-sm mb-2">
        Click <strong>Add Job</strong> below to add your job interest
      </p>
      <AddInterestedJob />
      <div className="w-full h-[160px] bg-gray-100 mt-4 p-4 overflow-auto">
        {jobs?.length === 0 ? (
          <div className="h-full w-full grid place-items-center">
            <p className="text-gray-500 text-sm">No Interested Job Added yet</p>
          </div>
        ) : (
          <div>
            <p className="font-bold mb-2 text-sm">
              Interested Jobs: {jobs.length}
            </p>
            {jobs?.map((job) => (
              <div
                key={job.id}
                className="group w-full bg-white px-4 py-2 text-sm mb-3 rounded-lg hover:border hover:border-blue-700"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-300 h-2 w-2 rounded-full group-hover:bg-blue-700"></div>
                    <div>
                      <h2 className="text-blue-700 font-bold">
                        {job.jobTitle}
                      </h2>
                      <p className="text-gray-500">
                        Location:{" "}
                        <span className="font-bold">{job.location}</span>
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteJob(job.id)}
                    className="bg-red-300 group-hover:bg-red-600 p-2 rounded-lg group-hover:cursor-pointer"
                  >
                    <FaRegTrashAlt className="text-white w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpStepTwo;
