import { featuredJob } from "../constant";
import { useGetFeaturedJobsQuery } from "../rtk/services/jobs";
import { layout } from "../styles";
import Button from "./Button";
import FeaturedJobCard from "./FeaturedJobCard";

const FeaturedJobList = () => {
  const { data, isLoading } = useGetFeaturedJobsQuery("", {
    refetchOnMountOrArgChange: true,
  });

  return (
    <section className={`${layout.section} bg-blue-50`}>
      <div className="text-center mb-10">
        {/* <p className="text-blue-600 font-medium">Job Category</p> */}
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mt-2">
          Featured Jobs
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data &&
          data?.data.length > 0 &&
          data?.data.map((job, index) => (
            <FeaturedJobCard key={index} {...job} />
          ))}
      </div>
      <div className="flex justify-center">
        <Button name="Show More" onClick={() => {}} />
      </div>
    </section>
  );
};

export default FeaturedJobList;
