import { Search } from "lucide-react";
import { layout } from "../styles";
import { stats } from "../constant";
import { CompanySavedJob, RecommendedCandidates } from ".";

const CompanyPostedJob = () => {
  const handleSearchClick = () => {
    console.log("Search icon clicked");
    // You can add logic here to handle the search functionality, like opening a search modal or redirecting to a search page.
  };

  return (
    <div className={`${layout.section} `}>
      {/* Search Bar */}
      <div className="bg-white p-3 rounded-lg flex items-center gap-2 shadow-md">
        <input
          type="text"
          placeholder="Search for anything"
          className="flex-1 outline-none"
        />
        <button onClick={handleSearchClick}>
          <Search className="text-gray-400 ml-auto" />
        </button>
      </div>

      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white py-4 px-1  rounded-lg shadow-md">
            <p className="text-2xl font-bold text-blue-600">{stat.count}</p>
            <p className="text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-xl font-semibold">
            Recommend for you
          </h2>
          <a href="#" className="text-blue-600">
            See all
          </a>
        </div>
        <RecommendedCandidates gridCols="md:grid-cols-2 lg:grid-cols-4" />
      </div>

      {/* Saved Jobs */}
      <div className="mt-8">
        <CompanySavedJob />
      </div>
    </div>
  );
};

export default CompanyPostedJob;
