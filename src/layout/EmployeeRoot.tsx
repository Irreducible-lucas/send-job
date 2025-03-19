import { Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { logOut } from "../rtk/features/user/authSlice";
import { useAppDispatch, useAppSelector } from "../rtk/hooks";
import { setJobAppModalOpen } from "../rtk/features/user/jobSlice";
import { JobApplicationModal } from "../components";

const EmployeeRoot = () => {
  const auth = useAppSelector((state) => state.auth)
  const { isJobAppModalOpen } = useAppSelector((state) => state.job)
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <main className="bg-gray-100 h-screen grid md:grid-cols-[250px_1fr] overflow-hidden">
      <aside className="hidden md:block overflow-y-auto">
        <div className="bg-white text-black h-full px-4 flex flex-col justify-between">
          <section className="flex flex-col gap-4">
            <div className="flex items-center py-3 gap-4">
              <div className="bg-blue-700 w-[40px] h-[40px] rounded-xl"></div>
              <h1 className="font-bold text-2xl font-barlow">Logo</h1>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src={"https://gravatar.com/avatar/e5607a7ede604ade06cfbd847d9b5a02?s=400&d=robohash&r=x"} className="bg-slate-300 rounded-full border w-[80px] h-[80px]" alt="User profile picture" />
              <h2 className="text-center text-black font-barlow font-bold">{auth?.currentUser?.name}</h2>
            </div>
            <div className="flex flex-col">
              <Link to={"/employee"} className="group p-4 rounded-lg flex items-center gap-4 hover:bg-blue-700 text-black hover:text-white">
                <RxDashboard size={30} />
                <p className="text-lg group-hover:font-bold">Dashboard</p>
              </Link>
              <Link to={"/employee/jobs"} className="group p-4 rounded-lg flex items-center gap-4 hover:bg-blue-700 text-black hover:text-white">
                <IoBriefcaseOutline size={30} />
                <p className="text-lg group-hover:font-bold">Jobs</p>
              </Link>
              <Link to={"/employee/profile"} className="group p-4 rounded-lg flex items-center gap-4 hover:bg-blue-700 text-black hover:text-white">
                <CgProfile size={30} />
                <p className="text-lg group-hover:font-bold">Profile</p>
              </Link>
            </div>
          </section>
          <button onClick={handleLogout} className="group p-4 rounded-lg flex items-center gap-4 hover:bg-red-600 text-black hover:text-white">
            <GoSignOut size={30} />
            <p className="text-lg group-hover:font-bold">Logout</p>
          </button>
        </div>
      </aside>
      <section className="overflow-y-auto">
        <Outlet />
        {isJobAppModalOpen && (
          <JobApplicationModal onClose={() => dispatch(setJobAppModalOpen(false))} />
        )}
      </section>
    </main>
  );
};

export default EmployeeRoot;
