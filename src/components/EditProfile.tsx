import React, { useState } from "react";

const ProfileCard: React.FC = () => {
  const [aboutMe, setAboutMe] = useState("");

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex flex-col items-center space-y-4">
        {/* Profile Photo Section */}
        <div className="flex flex-col items-center space-y-2">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <button className="px-4 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            Change photo
          </button>
        </div>
        <p className="text-center text-sm text-gray-500">
          Make sure the face is clearly visible, front and neatly dressed
        </p>
      </div>

      {/* About Me Section */}
      <div className="mt-6">
        <label
          htmlFor="aboutMe"
          className="block text-gray-700 text-sm font-medium"
        >
          About me
        </label>
        <textarea
          id="aboutMe"
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          maxLength={300}
          className="w-full mt-2 p-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          placeholder="Tell me here ..."
        ></textarea>
        <p className="text-right text-sm text-gray-500 mt-1">
          {300 - aboutMe.length} character{300 - aboutMe.length !== 1 && "s"}{" "}
          left
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
