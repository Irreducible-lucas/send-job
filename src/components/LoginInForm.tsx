import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login, getCurrentUser } from "../rtk/features/user/authSlice";
import { AppDispatch, RootState } from "../rtk";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.currentUser?.role === "seeker") {
      navigate("/");
    }

    if (auth?.currentUser?.role === "company") {
      navigate("/employer");
    }
  }, [auth])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 h-full">
      <h2 className="text-xl font-bold mb-6">LOGIN</h2>
      <p className="text-gray-600 mb-6 text-center">
        Enter your username and password to access the job application
      </p>
      <form onSubmit={handleLogin}>
        <div className="w-full max-w-sm space-y-4">
          {/* Username and Password Fields */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {auth.error && auth.error !== "user not logged in" && (<div className="bg-red-100 p-3 grid place-items-center rounded-lg">
            <p className="text-red-600">{auth.error}</p>
          </div>)}
          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="text-sm flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          {/* Login Button */}
          <button disabled={auth.isLoading} className="w-full py-3 disabled:bg-blue-600/30 disabled:hover:cursor-not-allowed bg-blue-600 text-white rounded-md hover:bg-blue-700">
            {auth.isLoading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>

      {/* Signup Link */}
      <p className="mt-4 text-sm">
        Don’t have an account?{" "}
        <a href="/sign-up" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>

      {/* Social Login Buttons */}
      <div className="w-full max-w-sm mt-6 space-y-4">
        <button className="w-full py-3 border-[1px] border-gray-300 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-100">
          <FontAwesomeIcon icon={faGoogle} className="mr-2 text-red-600" />
          Login with Google
        </button>
        <button className="w-full py-3 border-[1px] border-gray-300 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-100">
          <FontAwesomeIcon icon={faFacebook} className="mr-2 text-blue-600" />
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
