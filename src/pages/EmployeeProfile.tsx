import { useState } from "react";
import ProfileEdit from "../components/ProfileEdit";
import EmployeeEduHistory from "./EmployeeEduHistory";
import WorkExperienceHistory from "./WorkExperienceHistory";
import { FaUser } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Header from "../components/employer/Header";

const EmployeeProfile = () => {
  const [selected, setSelected] = useState({
    id: 1,
    name: "Personal Information",
  });

  const profile = [
    {
      id: 1,
      icon: <FaUser size={20} className="text-gray-600" />,
      name: "Personal Information",
    },
    {
      id: 2,
      icon: <FaUserGraduate size={20} className="text-gray-600" />,
      name: "Education",
    },
    {
      id: 3,
      icon: <MdWork size={20} className="text-gray-600" />,
      name: "Work Experience",
    },
  ];

  const INFO: any = {
    "Personal Information": <ProfileEdit />,
    Education: <EmployeeEduHistory />,
    "Work Experience": <WorkExperienceHistory />,
  };

  return (
    <div className={"grid grid-rows-[70px_500px] pb-6"}>
      <Header title="My Profle" />
      <div className="p-4 grid grid-cols-[300px_1fr] gap-4 h-full">
        <div className="flex flex-col gap-4 items-start bg-white p-4 rounded-lg">
          {profile.map((data) => (
            <button
              onClick={() => setSelected(data)}
              key={data.id}
              className={`hover:text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg flex gap-2 items-center ${
                selected.id === data.id
                  ? "bg-blue-100 text-blue-700 font-bold"
                  : "text-gray-500"
              }`}
            >
              {data.icon}
              {data.name}
            </button>
          ))}
        </div>
        <div className="bg-white p-4 rounded-lg ">{INFO[selected.name]}</div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
