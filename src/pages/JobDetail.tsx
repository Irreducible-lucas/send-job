import { JobDetailContent } from "../components";
import JobSideNavList from "../components/JobSideNavList";
import { layout } from "../styles";

const JobDetails = () => {
  return (
    <div
      className={`${layout.section} grid grid-cols-1 md:grid-cols-3 gap-x-6`}
    >
      {/* Main Content */}
      <div className="md:col-span-2">
        <JobDetailContent />
      </div>

      {/* Sidebar */}
      <div className="md:col-span-1">
        <JobSideNavList />
      </div>
    </div>
  );
};

export default JobDetails;
