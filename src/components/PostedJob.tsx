import PostedJobCard from "./PostedJobCard";
import { postedJobs } from "../constant";
import { layout } from "../styles";

interface PostedJobProps {
  showHeading?: boolean;
}

const PostedJob = ({ showHeading = true }: PostedJobProps) => {
  return (
    <div className={`${layout.section}`}>
      {showHeading && (
        <div className="text-center mb-10">
          {/* <p className="text-blue-600 font-medium">Job for You</p> */}
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mt-2">
            Job for You
          </h2>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {postedJobs.map((job) => (
          <PostedJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default PostedJob;
