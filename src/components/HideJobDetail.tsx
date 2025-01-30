import { useNavigate } from "react-router-dom";

const HideJobDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl min-h-screen flex flex-col bg-white p-6 shadow-md">
        {/* Arrow Button */}
        <button
          className="text-gray-600 mb-6 text-start lg:text-lg"
          onClick={() => navigate("/profile")}
        >
          &larr;
        </button>

        {/* Main Content */}
        <h1 className="text-2xl font-bold">Hide jobs with these details</h1>
        <p className="text-gray-600 mt-2">
          We'll try to hide jobs asking for these qualifications or preferences.
        </p>

        {/* Info Box */}
        <div className="bg-gray-200 p-4 rounded-lg mt-4">
          When you provide feedback about the jobs shown in your search results
          and email notifications, you’ll see the details here.
        </div>

        {/* Push Footer to Bottom */}
        <div className="flex-grow"></div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-6">
          &copy;2025 SendJob -{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Cookies, Privacy and Terms
          </a>
        </footer>
      </div>
    </div>
  );
};

export default HideJobDetail;
