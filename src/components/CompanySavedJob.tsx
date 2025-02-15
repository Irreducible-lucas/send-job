import moment from "moment";

const CompanySavedJob = ({jobs}: any) => {
  const savedJobs = jobs?.filter((job: any) => job.posted === 0) || [];
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Saved Jobs</h2>
        <a href="#" className="text-blue-600">
          See all
        </a>
      </div>
      <div className="mt-4">
        {savedJobs?.length === 0 ? (<div>
          <div className="bg-white rounded-lg text-gray-600 font-bold w-full h-[150px] grid place-items-center">
            <p>No jobs saved yet</p>
          </div>
        </div>) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {savedJobs?.map((job: any) => (
            <div
              key={job.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3"
            >
              <img
                src={job.company_logo_url}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{job.job_title}</p>
                <p className="text-gray-500 text-sm">
                  Created at {moment(job.createdAt).format("D MMM YYYY")}
                </p>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default CompanySavedJob;
