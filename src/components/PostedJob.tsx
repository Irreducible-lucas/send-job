import PostedJobCard from "./PostedJobCard";
import { layout } from "../styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { Job } from "../type";
import { useSaveJobMutation, useSearchJobQuery } from "../rtk/services/jobs";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

interface PostedJobProps {
  showHeading?: boolean;
}

const PostedJob = ({ showHeading = true }: PostedJobProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObj = Object.fromEntries([...searchParams]);

  const [page, setPage] = useState(1);

  const { data, error, isFetching } = useSearchJobQuery({
    searchParamsObj,
    pageNum: page,
  });

  const jobs: Job[] = data?.data || [];
  const hasMore = data?.hasMore;
  // console.log(hasMore, "isfetching");
  // Function to load more jobs
  const fetchMoreJobs = () => {
    if (!isFetching && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  let navigate = useNavigate();

  const handleNavigate = (item: any) => {
    navigate(`/jobs/${item.id}`, {
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
    <div className={`${layout.section}`}>
      {showHeading && (
        <div className="text-center mb-10">
          {/* <p className="text-blue-600 font-medium">Job for You</p> */}
          <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mt-2">
            Featured Jobs
          </h2>
        </div>
      )}
      {error && <p className="text-red-500">Error loading jobs</p>}

      <InfiniteScroll
        dataLength={jobs.length}
        next={fetchMoreJobs}
        hasMore={!!hasMore}
        loader={<h4>Loading more jobs...</h4>}
        endMessage={
          <p>
            <b>No more jobs available.</b>
          </p>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.data.map((job: Job) => (
            <PostedJobCard
              handleNavigate={handleNavigate}
              saveJob={saveJob}
              key={job.id}
              job={job}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default PostedJob;
