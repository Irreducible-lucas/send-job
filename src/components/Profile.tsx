import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faEye,
  faEyeSlash,
  faFilePdf,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface ProfileProps {
  userImage?: string;
}

const Profile: React.FC<ProfileProps> = ({ userImage }) => {
  const [employerVisibility, setEmployerVisibility] = useState(true);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(
    userImage || null
  );
  const [location, setLocation] = useState("Lagos, NG");

  const handleVisibilityToggle = () => {
    setEmployerVisibility(!employerVisibility);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setResumeFile(event.target.files[0]);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between space-x-4">
        <div className="text-3xl font-bold">AKINSANYA AYOBAMI</div>
        <label htmlFor="profile-image-upload" className="cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white text-lg font-medium overflow-hidden">
            {profileImage ? (
              <img
                src={profileImage}
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span>AA</span>
            )}
          </div>
          <input
            id="profile-image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>

      {/* Contact Information */}
      <div className="mt-4 text-sm text-gray-700 space-y-2">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-600" />
          <span>luqmonayobami3600@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} className="text-gray-600" />
          <span>0810 842 0169</span>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faLocationDot} className="text-gray-600" />
            <span>{location}</span>
          </div>
          <Link
            to="profile-edit"
            className="text-blue-500 text-sm cursor-pointer hover:underline"
          >
            Edit
          </Link>
        </div>
      </div>

      {/* Status */}
      <div
        className={`mt-4 p-2 ${
          employerVisibility
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        } text-sm font-medium rounded-md flex items-center space-x-2 cursor-pointer`}
        onClick={handleVisibilityToggle}
      >
        <FontAwesomeIcon icon={employerVisibility ? faEye : faEyeSlash} />
        <span>
          {employerVisibility
            ? "Employers can find you on Send-Job"
            : "Employers cannot find you on Send-Job"}
        </span>
      </div>

      {/* Resume Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Resume</h2>
        <label
          htmlFor="resume-upload"
          className="flex items-center justify-between p-3 border rounded-md cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <FontAwesomeIcon icon={faFilePdf} />
            </div>
            <div>
              {resumeFile ? (
                <p className="text-sm font-medium">{resumeFile.name}</p>
              ) : (
                <p className="text-sm font-medium text-gray-600">
                  Upload your resume
                </p>
              )}
              <p className="text-xs text-gray-500">
                Supported formats: PDF, DOC, DOCX, XLSX
              </p>
            </div>
          </div>
        </label>
        <input
          id="resume-upload"
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx,.xlsx"
          onChange={handleFileChange}
        />
      </div>

      {/* Improve Your Job Matches Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Improve your job matches</h2>
        <div className="divide-y divide-gray-200">
          {[
            {
              to: "qualifications",
              title: "Qualifications",
              desc: "Highlight your skills and experience.",
            },
            {
              to: "job-preferences",
              title: "Job preferences",
              desc: "Save specific details like minimum desired pay and schedule.",
            },
            {
              to: "hide-job-details",
              title: "Hide jobs with these details",
              desc: "Manage the qualifications or preferences used to hide jobs from your search.",
            },
            {
              to: "ready-to-work",
              title: "Ready to work",
              desc: "Let employers know that you're available to start working as soon as possible.",
            },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex justify-between items-center py-4 px-4 hover:bg-gray-100"
            >
              <div>
                <p className="font-medium text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-gray-500"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-sm text-gray-500 text-center">
        ©2025 SierraJob -{" "}
        <Link to="#" className="underline">
          Cookies, Privacy and Terms
        </Link>
      </footer>
    </div>
  );
};

export default Profile;
