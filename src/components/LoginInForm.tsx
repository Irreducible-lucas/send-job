import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 h-full">
      <h2 className="text-xl font-bold mb-6">LOGIN</h2>
      <p className="text-gray-600 mb-6 text-center">
        Enter your username and password to access the job application
      </p>
      <div className="w-full max-w-sm space-y-4">
        {/* Username and Password Fields */}
        <input
          type="text"
          placeholder="Username/email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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
        <button className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Login
        </button>
      </div>
      {/* Signup Link */}
      <p className="mt-4 text-sm">
        Don’t have an account?{" "}
        <a href="#" className="text-blue-600 hover:underline">
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
