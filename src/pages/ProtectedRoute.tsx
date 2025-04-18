import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../rtk/hooks";

const ProtectedRoute = ({ redirectPath = "/login" }: any) => {
  const { token, authInitialized } = useAppSelector((state) => state.auth);
  const location = useLocation();

  // ⏳ Still initializing auth (wait!)
  console.log("Pass zero");
  if (!authInitialized) return <div className="p-4">Loading...</div>;
  console.log("Pass one");
  // 🔒 Auth failed → redirect
  if (!token) {
    console.log("going to login");
    return (
      <Navigate to={redirectPath} state={{ prev: location.pathname }} replace />
    );
  }

  // ✅ Auth ok → show route
  return <Outlet />;
};

export default ProtectedRoute;
