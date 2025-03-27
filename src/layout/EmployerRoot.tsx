import { Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { logOut } from "../rtk/features/user/authSlice";
import { useAppDispatch, useAppSelector } from "../rtk/hooks";
import JobAdModal from "../components/JobAdModal";
import { setJobModalOpen, setEmpJobDetailsModalOpen, setEditJobModalOpen } from "../rtk/features/user/jobSlice";
import { EditJobAdModal, EmployerJobDetails } from "../components";
import { CgProfile } from "react-icons/cg";

const EmployerRoot = () => {
  const { currentUser }: any = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch();
  const { isJobModalOpen, isEditJobModalOpen, isEmpJobDetailsModalOpen } = useAppSelector((state) => state.job);
  const handleLogout = () => {
    dispatch(logOut());
  };

  const location = useLocation();
  const isActive = (path: any) => location.pathname === path;

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
              <img src={currentUser?.profile_image_url ?? "https://gravatar.com/avatar/e5607a7ede604ade06cfbd847d9b5a02?s=400&d=robohash&r=x"} className="bg-slate-300 rounded-full border w-[80px] h-[80px]" alt="User profile picture" />
              <div>
                <h2 className="text-center text-black font-barlow font-bold">{currentUser?.full_name}</h2>
                <p className="text-sm text-gray-500">{currentUser?.job_title}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link to={"/employer"} className={`group p-4 rounded-lg flex items-center gap-4 ${isActive("/employer") ? "bg-blue-700 text-white font-bold" : "text-black hover:bg-blue-700 hover:text-white"
                }`}
              >
                <RxDashboard size={30} />
                <p className="text-lg group-hover:font-bold">Dashboard</p>
              </Link>
              <Link to={"/employer/jobs"} className={`group p-4 rounded-lg flex items-center gap-4 ${isActive("/employer/jobs") ? "bg-blue-700 text-white font-bold" : "text-black hover:bg-blue-700 hover:text-white"
                }`}
              >
                <IoBriefcaseOutline size={30} />
                <p className="text-lg group-hover:font-bold">My Jobs</p>
              </Link>
              <Link to={"/employer/profile"} className={`group p-4 rounded-lg flex items-center gap-4 ${isActive("/employer/profile") ? "bg-blue-700 text-white font-bold" : "text-black hover:bg-blue-700 hover:text-white"
                }`}
              >
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
        {isJobModalOpen && (
          <JobAdModal onClose={() => dispatch(setJobModalOpen(false))} />
        )}
        {isEditJobModalOpen && (
          <EditJobAdModal onClose={() => dispatch(setEditJobModalOpen(false))} />
        )}
        {isEmpJobDetailsModalOpen && (
          <EmployerJobDetails onClose={() => dispatch(setEmpJobDetailsModalOpen(false))} />
        )}
      </section>
    </main>
  );
};

export default EmployerRoot;
