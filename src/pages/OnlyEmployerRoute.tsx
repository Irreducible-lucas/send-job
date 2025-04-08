import { useEffect, useState } from "react";
import { useAppSelector } from "../rtk/hooks";
import { useNavigate } from "react-router-dom";

const OnlyEmployerRoute = ({ children }: any) => {
  const auth = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {

    // If no token, redirect to login
    if (!auth.token) {
      navigate("/login", { replace: true });
      return;
    }

  }, [auth, navigate]);

  return <>{children}</>;
};

export default OnlyEmployerRoute;