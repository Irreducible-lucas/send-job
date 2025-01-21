import React from "react";
import { LoginInForm, LoginLeft } from "../components";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <LoginLeft />
      <LoginInForm />
    </div>
  );
};

export default LoginPage;
