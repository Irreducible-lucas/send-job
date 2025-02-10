import { Search } from 'lucide-react';
import { CompanySavedJob, RecommendedCandidates } from '../../components';
import { FaUsers } from "react-icons/fa";
import { FaBriefcase, FaBookmark } from "react-icons/fa6";
import { GoSignOut } from "react-icons/go";

const Dashboard = () => {
    const handleSearchClick = () => {
        console.log("Search icon clicked");
        // You can add logic here to handle the search functionality, like opening a search modal or redirecting to a search page.
    };
    return (
        <div className={"grid grid-rows-[70px_1fr]"}>
            <header className='h-[70px] px-[40px] bg-white flex items-center justify-between'>
                <h2 className='text-xl font-bold'>Dashboard</h2>
                {/* Search Bar */}
                <div className="bg-white w-[400px] p-3 rounded-lg flex items-center gap-2 shadow-md">
                    <input
                        type="text"
                        placeholder="Search for anything"
                        className="flex-1 outline-none"
                    />
                    <button onClick={handleSearchClick}>
                        <Search className="text-gray-400 ml-auto" />
                    </button>
                </div>
                <a href="#" className="w-full text-sm font-bold md:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Post Job for Free
                </a>
            </header>
            <section className='px-[40px]'>
                {/* Stats Section */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="bg-white py-4 px-8  rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <p className="text-3xl font-bold text-blue-700">2</p>
                            <p className="text-gray-500 mt-1">Posted Jobs</p>
                        </div>
                        <div className='bg-blue-700 p-4 rounded-full text-white grid place-items-center'>
                            <FaBriefcase size={30} />
                        </div>
                    </div>

                    <div className="bg-white py-4 px-8  rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <p className="text-3xl font-bold text-blue-700">15</p>
                            <p className="text-gray-500 mt-1">Applicants</p>
                        </div>
                        <div className='bg-blue-700 p-4 rounded-full text-white grid place-items-center'>
                            <FaUsers size={30} />
                        </div>
                    </div>

                    <div className="bg-white py-4 px-8  rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <p className="text-3xl font-bold text-blue-700">1</p>
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
                    <RecommendedCandidates gridCols="md:grid-cols-2 lg:grid-cols-4" />
                </div>

                {/* Saved Jobs */}
                <div className="mt-8">
                    <CompanySavedJob />
                </div>
            </section>
        </div>
    )
}

export default Dashboard