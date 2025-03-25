import { FaUserCircle } from "react-icons/fa";
import { useAppSelector } from "../../rtk/hooks";
import { ProfileImageUploadModal, EmpProfileInfoModal } from "..";

const ProfileEdit = () => {
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <div className="w-full">
      <div className="p-4 flex items-center gap-8">
        {currentUser?.profile_image_url ? (<img src={currentUser?.profile_image_url} className="w-[100px] h-[100px] object-cover rounded-full" alt="profile picture" />) : (
          <FaUserCircle size={100} className="text-blue-700" />
        )}
        <div>
          <ProfileImageUploadModal />
          <p className="mt-2 text-sm text-gray-500">Make sure the face is clearly visible</p>
        </div>
      </div>
      <hr className="my-4" />

      {/* Personal Data Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-black font-bold">Personal Information</h2>
          <EmpProfileInfoModal />
        </div>
        <hr className="mb-4" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-gray-500 text-sm">Full Name</h3>
            <p className="font-bold">{currentUser?.full_name ? currentUser?.full_name : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Email</h3>
            <p className="font-bold">{currentUser?.email ? currentUser?.email : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Job Title</h3>
            <p className="font-bold">{currentUser?.job_title ? currentUser?.job_title : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Phone Number</h3>
            <p className="font-bold">{currentUser?.telephone_number ? currentUser?.telephone_number : "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Gender</h3>
            <p className="font-bold">{currentUser?.gender ? currentUser?.gender : "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
