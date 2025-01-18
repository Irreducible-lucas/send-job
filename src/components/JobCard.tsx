import { JobCategory } from "../type";
interface JobCardProps {
  category: JobCategory;
}

const JobCard: React.FC<JobCardProps> = ({ category }) => {
  return (
    <div className="group flex flex-col items-center px-4 py-6 bg-white shadow-lg rounded-lg hover:bg-blue-500">
      <img
        src={category.icon}
        alt={category.title}
        className="w-20 h-20 rounded-full mb-4"
      />
      <h3 className="text-base font-semibold text-gray-800 group-hover:text-white">
        {category.title}
      </h3>
      <p className="text-sm text-gray-600 group-hover:text-white">
        {category.jobsAvailable} Jobs Available
      </p>
    </div>
  );
};

export default JobCard;
