import { useNavigate, Outlet } from "react-router-dom";
import { Company, Instructor, JobSeekerIcon } from "../assets";
import { layout } from "../styles";
import { UserCardProps } from "../type";
import { LoginLeft } from "../components";

const SignUp = () => {
  return (
    <div>
      <Outlet /> <MainSignUp />
    </div>
  );
};

const MainSignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div
        className={`${layout.section} flex flex-col items-center min-h-screen bg-blue-600 p-4`}
      >
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold">REGISTER</h1>
          <p className="text-white text-sm mt-2">
            Please select a user before registering in the Jobdream application.
          </p>
        </div>

        <div className="mt-8 lg:mt-14 w-full max-w-md space-y-2">
          <UserCard
            title="Job Seekers"
            description="We have the best jobs for freelance, part-time, full-time, hybrid, or physical roles."
            imageSrc={JobSeekerIcon}
            onClick={() => navigate("sign-up/job-seeker")}
          />
          <UserCard
            title="Company"
            description="Find the best talent for your company here."
            imageSrc={Company}
            onClick={() => navigate("sign-up/company")}
          />
          <UserCard
            title="Instructor"
            description="Create a class according to your skills and earn."
            imageSrc={Instructor}
            onClick={() => navigate("sign-up/instructor")}
          />
        </div>
      </div>
      <LoginLeft />
    </div>
  );
};

const UserCard = ({ title, description, imageSrc, onClick }: UserCardProps) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div>
        <h2 className="text-blue-700 font-semibold text-lg">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
      <img src={imageSrc} alt={title} className="w-14 h-14" />
    </div>
  );
};

export default SignUp;
