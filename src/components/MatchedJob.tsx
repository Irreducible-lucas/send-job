import { useNavigate } from "react-router-dom";
import {
  useGetMatchedJobsQuery,
  useSaveJobMutation,
} from "../rtk/services/jobs";
import { layout } from "../styles";
import Button from "./Button";

import { Job } from "../type";
import PostedJobCard from "./PostedJobCard";
import { toast } from "react-toastify";

const MatchedJobs = () => {
  const userId: any = 5;
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
      if (response.data.message === "Job Already Saved") {
        toast.info("Job already save");
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
