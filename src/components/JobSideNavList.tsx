import { jobDeatilsSidebar, otherJobs } from "../constant";
import JobSideNavCard from "./JobSideNavCard";

const JobSideNavList = () => {
  return (
    <div className="">
      <div className="space-y-4">
        <h1 className="font-bold text-base">Similar Jobs</h1>
        {jobDeatilsSidebar.map((job) => (
          <JobSideNavCard key={job.id} job={job} />
        ))}
      </div>
      <div className="space-y-4 mt-10">
        <h1 className="font-bold text-base">Other Jobs From Pixel Studio</h1>
        {otherJobs.map((job) => (
          <JobSideNavCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobSideNavList;
