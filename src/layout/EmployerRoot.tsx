import { Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";

const EmployerRoot = () => {
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
              <div className="bg-slate-300 rounded-full border w-[80px] h-[80px]"></div>
              <h2 className="text-center text-black font-barlow font-bold">Abiola Adeosun</h2>
            </div>
            <div className="flex flex-col gap-4">
              <Link to={"/employer"} className="group p-4 rounded-lg flex items-center gap-4 hover:bg-blue-700 text-black hover:text-white">
                <RxDashboard size={30} />
                <p className="text-lg group-hover:font-bold">Dashboard</p>
              </Link>
              <Link to={"/employer/jobs"} className="group p-4 rounded-lg flex items-center gap-4 hover:bg-blue-700 text-black hover:text-white">
                <IoBriefcaseOutline size={30} />
                <p className="text-lg group-hover:font-bold">My Jobs</p>
              </Link>
            </div>
          </section>
          <Link to={"/login"} className="group p-4 rounded-lg flex items-center gap-4 hover:bg-red-600 text-black hover:text-white">
            <GoSignOut size={30} />
            <p className="text-lg group-hover:font-bold">Logout</p>
          </Link>
        </div>
      </aside>
      <section className="h-screen">
        <Outlet />
      </section>
    </main>
  );
};

export default EmployerRoot;
