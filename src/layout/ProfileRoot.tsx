import { Outlet } from "react-router-dom";

const ProfileRoot = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileRoot;
