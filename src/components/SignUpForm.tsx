import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

const SignUpForm = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
      <h2 className="text-xl font-bold mb-6">SIGN UP</h2>
      <p className="text-gray-600 mb-6 text-center">
        Create an account to get started with your job search.
      </p>
      <div className="w-full max-w-sm space-y-4">
        {/* First Name and Last Name */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="text-sm font-semibold text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="text-sm font-semibold text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address */}
        <div>
          <label className="text-sm font-semibold text-gray-700">Address</label>
          <textarea
            placeholder="Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
        </div>

        {/* Job Preference */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="text-sm font-semibold text-gray-700">
              Preferred Job Title
            </label>
            <input
              type="text"
              placeholder="Preferred Job Title"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="text-sm font-semibold text-gray-700">
              Preferred Location
            </label>
            <input
              type="text"
              placeholder="Preferred Location"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Key Skills (comma separated)
          </label>
          <input
            type="text"
            placeholder="Key Skills"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Work Experience */}
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Work Experience (in years)
          </label>
          <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Years of Experience</option>
            <option value="0">Less than 1 year</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="4">4 years</option>
            <option value="5">5 years</option>
            <option value="6">6 years</option>
            <option value="7">7 years</option>
            <option value="8">8 years</option>
            <option value="9">9 years</option>
            <option value="10">10+ years</option>
          </select>
        </div>

        {/* Education */}
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Highest Level of Education
          </label>
          <input
            type="text"
            placeholder="Highest Level of Education"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password and Confirm Password */}
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm text-gray-600">
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms and Conditions
            </a>
          </label>
        </div>

        {/* Sign Up Button */}
        <button className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </div>

      {/* Login Link */}
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Login
        </a>
      </p>

      {/* Social Signup Buttons */}
      <div className="w-full max-w-sm mt-6 space-y-4">
        <button className="w-full py-3 border-[1px] border-gray-300 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-100">
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Sign Up with Google
        </button>
        <button className="w-full py-3 border-[1px] border-gray-300 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-100">
          <FontAwesomeIcon icon={faFacebook} className="mr-2" />
          Sign Up with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
