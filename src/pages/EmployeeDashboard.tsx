import { EmployeeJobCard } from "../components";
import { FaBriefcase, FaBookmark } from "react-icons/fa6";
import { useAppSelector } from "../rtk/hooks";
import { useGetMyApplicationsQuery } from "../rtk/services/application";
import { useGetSavedJobsQuery } from "../rtk/services/jobs";
import Header from "../components/employer/Header";

const Dashboard = () => {
  const { currentUser }: any = useAppSelector((state) => state.auth);
  const { data: saved_jobs, isLoading } = useGetSavedJobsQuery(currentUser?.id);
  const { data: applied_jobs, isLoading: isLoadingAppliedJobs } =
    useGetMyApplicationsQuery(currentUser?.id);

  return (
    <div className={"grid grid-rows-[70px_1fr] pb-6"}>
      <Header title="Dashboard" />
      <section className="px-[40px]">
        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white py-4 px-8 lg:h-[150px] rounded-lg shadow-md flex justify-between items-center">
            <div>
              <p className="text-5xl font-bold text-blue-700">
                {isLoading ? 0 : saved_jobs?.data.length}
              </p>
              <p className="text-gray-500 mt-1">Saved Jobs</p>
            </div>
            <div className="bg-blue-700 p-4 rounded-full text-white grid place-items-center">
              <FaBookmark size={30} />
            </div>
          </div>
          <div className="bg-white py-4 px-8 lg:h-[150px] rounded-lg shadow-md flex justify-between items-center">
            <div>
              <p className="text-5xl font-bold text-blue-700">
                {isLoadingAppliedJobs ? 0 : applied_jobs?.data.length}
              </p>
              <p className="text-gray-500 mt-1">Applied Jobs</p>
            </div>
            <div className="bg-blue-700 p-4 rounded-full text-white grid place-items-center">
              <FaBriefcase size={30} />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-xl font-semibold">Saved Jobs</h2>
            {/* <a href="#" className="text-blue-600">
                            See all
                        </a> */}
          </div>
          <div className="mt-4">
            {saved_jobs?.data.length === 0 ? (
              <div className="bg-white rounded-lg text-gray-600 font-bold mt-4 w-full h-[150px] grid place-items-center">
                No saved Jobs yet
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {saved_jobs?.data.map((job: any, index: number) => (
                  <EmployeeJobCard key={index} job={job} saved={true} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
