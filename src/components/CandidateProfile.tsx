import { useState } from "react";
import { Button } from "../../components/button";
import { FaArrowLeft, FaCalendarCheck, FaEnvelope } from "react-icons/fa";
import { profileData } from "../constant";
import { Link } from "react-router-dom";

const CandidateProfile = () => {
  const [showActions, setShowActions] = useState(false);
  const [decision, setDecision] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Link to="/employer/jobs/1">
      <div className="flex items-center gap-3 mb-4">
        <FaArrowLeft className="text-lg cursor-pointer" />
        <h2 className="text-lg font-semibold">Job Details</h2>
      </div>
      </Link>

      {/* Profile Card */}
      <div className="p-5 shadow-md rounded-lg bg-white">
        <div className="flex items-center gap-4">
          <img
            src={profileData.image}
            className="w-16 h-16 rounded-full"
            alt="profile"
          />
          <div>
            <h3 className="text-lg font-semibold">{profileData.name}</h3>
            <p className="text-sm text-gray-500">{profileData.role}</p>
            <p className="text-xs text-gray-400">{profileData.location}</p>
            <p className="text-xs text-gray-400">{profileData.appliedDate}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4">
          <div className="flex gap-2">
            {showActions ? (
              <>
                <Button
                  className="flex-1 bg-green-600 text-white hover:bg-green-700"
                  onClick={() => setDecision("Accepted")}
                >
                  Accept
                </Button>
                <Button
                  className="flex-1 bg-red-600 text-white hover:bg-red-700"
                  onClick={() => setDecision("Rejected")}
                >
                  Reject
                </Button>
              </>
            ) : (
              <Button
                className="flex-1 bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700"
                onClick={() => setShowActions(true)}
              >
                <FaCalendarCheck className="text-lg" />
                Interview Invitation
              </Button>
            )}
          </div>
          <div className="mt-2">
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <FaEnvelope className="text-lg" />
              Message
            </Button>
          </div>
          {decision && (
            <p className="text-center mt-2 text-gray-600">
              Decision: {decision}
            </p>
          )}
        </div>
      </div>

      {/* About Me */}
      <div className="mt-6 p-5 rounded-lg bg-white">
        <h4 className="text-md font-semibold">About me</h4>
        <p className="text-sm text-gray-600 mt-1">{profileData.about}</p>
      </div>

      {/* Education */}
      {profileData.education.map((edu, index) => (
        <div key={index} className="mt-4 p-5 rounded-lg bg-white">
          <h4 className="text-md font-semibold">Education</h4>
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <p>{edu.institution}</p>
            <p>{edu.duration}</p>
          </div>
          <p className="text-sm text-gray-500">{edu.degree}</p>
          <ul className="list-disc list-inside text-sm text-gray-500 mt-1">
            {edu.experiences.map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Work Experience */}
      {profileData.workExperience.map((work, index) => (
        <div key={index} className="mt-4 p-4 rounded-lg bg-white">
          <h4 className="text-md font-semibold">Work Experience</h4>
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <p>{work.company}</p>
            <p>{work.duration}</p>
          </div>
          <p className="text-sm text-gray-500">{work.role}</p>
          <ul className="list-disc list-inside text-sm text-gray-500 mt-1">
            {work.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CandidateProfile;
