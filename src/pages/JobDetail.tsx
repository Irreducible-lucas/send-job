import { useLocation } from "react-router-dom";
import { JobDetailContent } from "../components";
import JobSideNavList from "../components/JobSideNavList";
import { layout } from "../styles";
import { useState } from "react";
import { Job } from "../type";

const JobDetails = () => {
  const params = useLocation();

  const { state } = params.state;
  const [job, setJob] = useState<Job>(state);

  return (
    <div
      className={`${layout.section} grid grid-cols-1 md:grid-cols-3 gap-x-6`}
    >
      {/* Main Content */}
      <div className="md:col-span-2">
        <JobDetailContent job={job} />
      </div>

      {/* Sidebar */}
      <div className="md:col-span-1">
        <JobSideNavList job={job} />
      </div>
    </div>
  );
};

export default JobDetails;
