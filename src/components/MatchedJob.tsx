import { useNavigate } from "react-router-dom";
import { useGetMatchedJobsQuery } from "../rtk/services/jobs";
import { layout } from "../styles";
import Button from "./Button";

import { Job } from "../type";
import PostedJobCard from "./PostedJobCard";

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

  return (
    <section className={`${layout.section} bg-blue-50`}>
      <div className="text-center mb-10">
        {/* <p className="text-blue-600 font-medium">Job Category</p> */}
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mt-2">
          Jobs For You
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data &&
          data?.data.length > 0 &&
          data?.data.map((job: Job, index: number) => (
            <PostedJobCard key={index} job={job} />
          ))}
      </div>
    </section>
  );
};

export default MatchedJobs;
