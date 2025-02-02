import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ApplicationSuccessful = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-5">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden p-10 transform transition-all duration-500 hover:scale-105">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-7xl animate-bounce" />
        </div>
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Congratulations!
        </h2>
        <p className="text-base text-gray-600 text-center mb-2">
          Your application was successfully submitted.
        </p>
        <p className="text-base text-gray-600 text-center mb-6">
          You will get an email confirmation at luqmonayobami3600@gmail.com.
        </p>

        <div className="flex justify-center space-x-5 md:space-x-10">
          <button
            onClick={handleGoHome}
            className="bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-110"
          >
            Return Home
          </button>
          {/* <button
            onClick={handleGoBack}
            className="bg-transparent border-2 border-gray-300 text-gray-800 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition-transform transform hover:scale-110"
          >
            Go Back
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ApplicationSuccessful;
