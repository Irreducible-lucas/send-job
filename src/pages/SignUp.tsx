import { FaRegUserCircle } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";

const SignUp = () => {
  return (
    <div className="w-full h-screen py-4 md:py-6 lg:py-10">
      <div
        className={`h-full overflow-y-auto bg-white text-black p-4`}
      >
        <div className="text-center">
          <h1 className="text-black text-2xl lg:text-4xl font-bold font-nunito mb-4 lg:mb-8">Create your Account</h1>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2">
          <div
            className="cursor-pointer flex flex-col items-center gap-4 bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-lg hover: border hover:border-blue-700 transition-shadow"
          >
            <div className="w-[100px] h-[100px] bg-blue-700 rounded-full grid place-items-center">
              <FaRegUserCircle className="text-white h-[60px] w-[60px]" />
            </div>
            <h2 className="text-blue-700 font-semibold text-xl md:text-2xl text-center">Job Seeker</h2>
            <div>
              <p className="text-gray-600 text-center">Are you looking for your dream job?</p>
              <p className="text-gray-600 text-center">We have the best jobs for you.</p>
            </div>
            <a href="/sign-up/job-seeker" className="bg-blue-700 hover:bg-blue-800 px-4 py-3 text-white rounded-lg text-sm font-bold font-barlow">
              Sign up as Job Seeker
            </a>
          </div>

          <div
            className="cursor-pointer flex flex-col items-center gap-4 bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-lg hover: border hover:border-blue-700 transition-shadow"
          >
            <div className="w-[100px] h-[100px] bg-blue-700 rounded-full grid place-items-center">
              <IoBriefcaseOutline className="text-white h-[60px] w-[60px]" />
            </div>
            <h2 className="text-blue-700 font-semibold text-xl md:text-2xl text-center">Employer</h2>
            <div>
              <p className="text-gray-600 text-center">Are you looking for quality candidates?</p>
              <p className="text-gray-600 text-center">Find the best talent for your company here.</p>
            </div>
            <a href="/sign-up/employer" className="bg-blue-700 hover:bg-blue-800 px-4 py-3 text-white rounded-lg text-sm font-bold font-barlow">
              Sign up as Employer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
