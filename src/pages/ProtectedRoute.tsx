import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from "../rtk";

type Props = {
  allowedRoles: string[]; // 👈 new
};

const ProtectedRoute = ({ allowedRoles }: Props) => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ prev: location.pathname }} replace />;
  }

  if (!allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/not-authorized" replace />; // or a custom "Unauthorized" page
  }

  return <Outlet />;
};

export default ProtectedRoute;
