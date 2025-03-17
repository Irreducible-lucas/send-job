import { Pencil } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { useAppSelector } from "../rtk/hooks";
import { ProfileImageUploadModal } from ".";

const ProfileEdit = () => {
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <div className="w-full">
      <h1 className="text-lg font-bold text-black">
        My Profile
      </h1>
      <hr className="my-4"/>
      <div className="p-4 flex items-center gap-8">
        {currentUser?.photoUrl ? (<img src={currentUser?.photoUrl} className="w-[100px] h-[100px] object-cover rounded-full" alt="profile picture"/>) : (
          <FaUserCircle size={100} className="text-blue-700" />
        )}
        <div>
          <ProfileImageUploadModal />
          <p className="mt-2 text-sm text-gray-500">Make sure the face is clearly visible</p>
        </div>
      </div>
      <hr className="my-4"/>

      {/* About Me Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
        <h2 className="text-black font-bold">About Me</h2>
          <button
            className="text-sm text-blue-600 bg-blue-100 px-4 py-2 rounded-lg flex justify-center items-center gap-x-3"
            // onClick={}
          >
            <Pencil size={16} /><span>Edit</span>
          </button>
        </div>
        <hr className="mb-4" />
        <p>{currentUser?.about_me ? currentUser?.about_me : "write a brief description about your self..."}</p>
      </div>
      <hr className="my-4"/>
      {/* Personal Data Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
        <h2 className="text-black font-bold">Personal Information</h2>
          <button
            className="text-sm text-blue-600 bg-blue-100 px-4 py-2 rounded-lg flex justify-center items-center gap-x-3"
            // onClick={}
          >
            <Pencil size={16} /><span>Edit</span>
          </button>
        </div>
        <hr className="mb-4" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-gray-500 text-sm">Full Name</h3>
            <p className="font-bold">{currentUser?.name ? currentUser?.name : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Email</h3>
            <p className="font-bold">{currentUser?.email ? currentUser?.email : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Phone Number</h3>
            <p className="font-bold">{currentUser?.telephone ? currentUser?.telephone : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Gender</h3>
            <p className="font-bold">{currentUser?.gender ? currentUser?.gender : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Date of Birth</h3>
            <p className="font-bold">{currentUser?.birthDate ? currentUser?.birthDate : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Date of Birth</h3>
            <p className="font-bold">{currentUser?.birthDate ? currentUser?.birthDate : "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
