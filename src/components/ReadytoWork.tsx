import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReadyToWork() {
  const [isAvailable, setIsAvailable] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleBackClick = () => {
    navigate("/profile"); // Navigate to the Profile page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl min-h-screen flex flex-col bg-white p-6 shadow-md">
        <button
          className="text-gray-600 mb-6 text-start lg:text-lg"
          onClick={handleBackClick} // Call the navigation function on click
        >
          &larr;
        </button>
        <h2 className="text-2xl font-bold">Ready to work</h2>
        <p className="text-gray-600 mt-2">
          Let employers know that you can begin working right away.
        </p>

        <div className="flex items-center mt-4">
          <button
            className={`w-10 h-6 flex items-center rounded-full p-1 transition ${
              isAvailable ? "bg-green-600" : "bg-gray-300"
            }`}
            onClick={() => setIsAvailable(!isAvailable)}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                isAvailable ? "translate-x-4" : ""
              }`}
            ></div>
          </button>
          <span className="ml-2 text-gray-800">
            {isAvailable
              ? "I'm available to start immediately"
              : "I'm not available yet"}
          </span>
        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Save
        </button>
        <button className="w-full mt-2 bg-white text-blue-600 py-2 rounded-lg border border-gray-300 font-semibold hover:bg-gray-100 transition">
          Cancel
        </button>

        {/* Pushes the footer to the bottom */}
        <div className="flex-grow"></div>

        <footer className="text-center text-gray-500 text-sm pt-6">
          &copy;2025 SendJob -{" "}
          <a href="#" className="underline">
            Cookies, Privacy and Terms
          </a>
        </footer>
      </div>
    </div>
  );
}
