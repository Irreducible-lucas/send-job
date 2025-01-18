import JobCard from "./JobCard";
import { jobCategories } from "../constant";
import { layout } from "../styles";

const JobCategorySection = () => {
  return (
    <section className={`${layout.section} bg-blue-50`}>
      <div className="text-center mb-8">
        <p className="text-blue-600 font-medium ">Browse By Category</p>
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 lg:max-w-md lg:mx-auto mt-2">
          Find the job that’s perfect for you.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 px-6">
        {jobCategories.map((category) => (
          <JobCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default JobCategorySection;
