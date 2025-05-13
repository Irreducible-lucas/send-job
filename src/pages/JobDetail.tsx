import { useLocation, useParams } from "react-router-dom";
import { JobDetailContent } from "../components";
import JobSideNavList from "../components/JobSideNavList";
import { layout } from "../styles";
import { useEffect, useState } from "react";
import { Job } from "../type";
import { fetchJobById } from "../rtk/features/user/jobSlice";

const JobDetails = () => {
  const params = useLocation();
  const { jobId } = useParams();

  // const { state } = params ? params?.state : {};
  const [job, setJob] = useState<Job>(
    params?.state?.state ? params?.state.state : null
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchJoB = async () => {
      setIsLoading(true);
      const fetchedJob = await fetchJobById(jobId);

      setJob(fetchedJob.data);
      setIsLoading(false);
    };

    if (job === null) fetchJoB();
  }, [job]);

  if (isLoading) return <div>Loading.....</div>;

  if (job === null) return <div>Job Not Found</div>;

  return (
    <div
      className={`${layout.section} grid grid-cols-1 md:grid-cols-3 gap-x-6 bg-blue-50`}
    >
      {/* Main Content */}
      <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-4">
        <JobDetailContent job={job} />
      </div>

      {/* Sidebar */}
      <div className="md:col-span-1 bg-white rounded-lg shadow-lg p-4">
        <JobSideNavList job={job} />
      </div>
    </div>
  );
};

export default JobDetails;
