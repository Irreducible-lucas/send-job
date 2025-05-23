import { useNavigate } from "react-router-dom";
import {
  useGetMatchedJobsQuery,
  useSaveJobMutation,
} from "../rtk/services/jobs";
import { layout } from "../styles";

import { Job } from "../type";
import PostedJobCard from "./PostedJobCard";
import { toast } from "react-toastify";
import { useAppSelector } from "../rtk/hooks";

const MatchedJobs = () => {
  const { currentUser }: any = useAppSelector((state) => state.auth);

  const userId: any = currentUser.id;
  const { data, error } = useGetMatchedJobsQuery(userId, {
    refetchOnMountOrArgChange: true,
  });

  let navigate = useNavigate();

  const handleNavigate = (item: any) => {
    navigate(`/jobs/${item.job_title}`, {
      state: { state: item },
    });
  };

  const [saveJob] = useSaveJobMutation();

  const onSaveJob = async (job: Job) => {
    const data: any = {
      jobId: job.id,
      userId: 1,
    };

    let response: any = await saveJob(data);

    if (response?.data) {
      if (response.data.message === "Job removed from saved jobs") {
        toast.success("Job removed from saved job");
        return;
      }
      toast.success("Job saved");
    } else {
      console.log(response.error);
      toast.error("Unable to save Job");
      // setErrorMessage('Error saving quote');
    }
  };

  return (
    <section className={`${layout.section} bg-blue-50`}>
      <div className="text-center mb-10">
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mt-2">
          Jobs For You
        </h2>
      </div>

      {data && data?.data.length === 0 && (
        <div className="w-full">
          <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mt-2 text-center">
            No suitable jobs found
          </h2>
          <h2 className="lg:text-xl text-sm font-bold text-gray-800 mt-2 text-center">
            Update your profile, so we can help you find the best jbos for you
          </h2>
        </div>
      )}

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data &&
          data?.data.length > 0 &&
          data?.data.map((job: Job, index: number) => (
            <PostedJobCard
              key={index}
              job={job}
              handleNavigate={handleNavigate}
              saveJob={onSaveJob}
            />
          ))}
      </div>
    </section>
  );
};

export default MatchedJobs;
