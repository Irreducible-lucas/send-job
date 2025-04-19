import {
  useGetJobsByCategoryQuery,
  useGetJobsByCompanyIdQuery,
} from "../rtk/services/jobs";
import { Job } from "../type";
import JobSideNavCard from "./JobSideNavCard";

interface Props {
  job: Job;
  // handleNavigate: (val: Job) => void;
}

const JobSideNavList = ({ job }: Props) => {
  const companyId: any = job.companyId;

  const catId: any = job.category_id;

  const { data, isLoading, error } = useGetJobsByCompanyIdQuery(
    { id: companyId },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: jobsByCate } = useGetJobsByCategoryQuery(catId, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) return "loading...";
  if (error) return "Something went wrong!" + error;
  if (!data) return "Jobs not found!";

  return (
    <div className="">
      <div className="space-y-4">
        <h1 className="font-bold text-base">Similar Jobs</h1>
        {jobsByCate?.data.length === 0 ? (
          <p className="p-4 text-gray-500">No similar jobs at the moment</p>
        ) : (
          jobsByCate?.data.map((item: Job) => {
            if (item.id !== job.id)
              return <JobSideNavCard key={item.id} job={item} />;
          })
        )}
      </div>
      <div className="space-y-4 mt-10">
        <h1 className="font-bold text-base">
          Other Jobs From {job.employer_name}
        </h1>
        {data?.data.map((item: Job) => {
          if (item.id !== job.id)
            return <JobSideNavCard key={item.id} job={item} />;
        })}
      </div>
    </div>
  );
};

export default JobSideNavList;
