import PostedJobCard from "./PostedJobCard";
import { layout } from "../styles";

import { Job } from "../type";

interface PostedJobProps {
  showHeading?: boolean;
  data: Job[];
}

const PostedJob = ({ showHeading = true, data }: PostedJobProps) => {
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
        {data &&
          data.length > 0 &&
          data.map((job: Job, index: number) => (
            <PostedJobCard key={job.id} job={job} />
          ))}
      </div>
    </div>
  );
};

export default PostedJob;
