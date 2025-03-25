import { useEffect, useState } from "react";
import { useAppSelector } from "../rtk/hooks";
import { useNavigate } from "react-router-dom";

const OnlyEmployerRoute = ({ children }: any) => {
  const auth = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Wait for auth to finish loading
    // if (auth.isLoading) {
    //     console.log("loading...")
    //   return;
    // }

    // If no token, redirect to login
    if (!auth.token) {
      navigate("/login", { replace: true });
      return;
    }

    // Auth check complete
    setIsChecking(false);
  }, [auth, navigate]);

  // Show loading while authentication check is in progress
  // if (auth.isLoading || isChecking) {
  //   return <div className="flex justify-center items-center h-screen">Loading...</div>;
  // }

  // console.log("AUTH:", auth.token)
  // Only render children when user is authenticated as employer
  return <>{children}</>;
};

export default OnlyEmployerRoute;