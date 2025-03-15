import { CompanySavedJob, RecommendedCandidates } from '../../components';
import { FaUsers } from "react-icons/fa";
import { FaBriefcase, FaBookmark } from "react-icons/fa6";
import Header from '../../components/employer/Header';
import { useAppSelector } from '../../rtk/hooks';
import { useGetJobApplicantsByCompanyIdQuery } from '../../rtk/services/application';
import { useGetJobsByCompanyIdQuery } from '../../rtk/services/jobs';

const Dashboard = () => {
    const { currentUser }: any = useAppSelector((state) => state.auth);
    const { data: application, isLoading: isLoadingApplication }: any = useGetJobApplicantsByCompanyIdQuery({ id: currentUser?.id });
    const {data: company_jobs, isLoading}: any = useGetJobsByCompanyIdQuery({id: currentUser?.id});
    
    const saved = company_jobs?.data.filter((job: any) => job.posted == false);
    const posted = company_jobs?.data.filter((job: any) => job.posted == true);

    return (
        <div className={"grid grid-rows-[70px_1fr] pb-6"}>
            <Header title='Dashboard' />
            <section className='px-[40px]'>
                {/* Stats Section */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="bg-white py-4 px-8  rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <p className="text-3xl font-bold text-blue-700">{isLoading ? 0 : posted?.length}</p>
                            <p className="text-gray-500 mt-1">Posted Jobs</p>
                        </div>
                        <div className='bg-blue-700 p-4 rounded-full text-white grid place-items-center'>
                            <FaBriefcase size={30} />
                        </div>
                    </div>

                    <div className="bg-white py-4 px-8  rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <p className="text-3xl font-bold text-blue-700">{isLoadingApplication ? 0 : application?.applicants}</p>
                            <p className="text-gray-500 mt-1">Applicants</p>
                        </div>
                        <div className='bg-blue-700 p-4 rounded-full text-white grid place-items-center'>
                            <FaUsers size={30} />
                        </div>
                    </div>

                    <div className="bg-white py-4 px-8  rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <p className="text-3xl font-bold text-blue-700">{isLoading ? 0 : saved?.length}</p>
                            <p className="text-gray-500 mt-1">Saved Jobs</p>
                        </div>
                        <div className='bg-blue-700 p-4 rounded-full text-white grid place-items-center'>
                            <FaBookmark size={30} />
                        </div>
                    </div>
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
                    <RecommendedCandidates />
                </div>

                {/* Saved Jobs */}
                <div className="mt-8">
                    <CompanySavedJob jobs={saved} />
                </div>
            </section>
        </div>
    )
}

export default Dashboard