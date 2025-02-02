import { useNavigate } from "react-router-dom";
import {
  useGetFeaturedJobsQuery,
  useSaveJobMutation,
} from "../rtk/services/jobs";
import { layout } from "../styles";
import FeaturedJobCard from "./FeaturedJobCard";
import { Job } from "../type";
import { toast } from "react-toastify";

const FeaturedJobList = () => {
  const { data, isLoading } = useGetFeaturedJobsQuery("", {
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
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 ">
          Featured Jobs
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data &&
          data?.data.length > 0 &&
          data?.data.map((job: Job, index: number) => (
            <FeaturedJobCard
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

export default FeaturedJobList;
