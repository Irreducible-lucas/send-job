import { companySavedJobs } from "../constant";

const CompanySavedJob = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Saved Jobs</h2>
        <a href="#" className="text-blue-600">
          See all
        </a>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {companySavedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3"
            >
              <img
                src={job.image}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{job.title}</p>
                <p className="text-gray-500 text-sm">
                  Created at {job.createdAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySavedJob;
