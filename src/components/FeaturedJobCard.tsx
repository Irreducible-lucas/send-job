import { FeaturedJobProps } from "../type";
import { FaBookmark, FaArrowRight } from "react-icons/fa";

const FeaturedJobCard = ({
  companyLogo,
  companyName,
  location,
  jobTitle,
  salary,
  jobType,
  postedTime,
}: FeaturedJobProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs border border-gray-200">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-blue-600 font-medium">{jobType}</span>
        <span className=" text-gray-500">{postedTime}</span>
      </div>
      <div className="flex items-center space-x-3 mb-4">
        <img
          src={companyLogo}
          alt={companyName}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-gray-800 font-medium">{companyName}</p>
          <p className="text-gray-500 text-xs">{location}</p>
        </div>
      </div>
      <h3 className="text-gray-800 font-semibold text-lg mb-2 border-b-[1px] pb-3">
        {jobTitle}
      </h3>
      <p className="text-blue-600 font-bold text-lg">
        {salary}
        <span className="text-black text-sm">/ Month</span>
      </p>
      <div className="flex justify-between items-center mt-4">
        <button className="flex items-center space-x-2 text-sm border border-gray-300 rounded-lg px-4 py-2 hover:border-gray-400 transition-all">
          <FaBookmark className="text-gray-600" />
          <span>Save</span>
        </button>
        <button className="flex items-center space-x-2 text-sm border border-blue-600 text-blue-600 rounded-lg px-4 py-2 hover:bg-blue-600 hover:text-white transition-all">
          <span>Apply</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
