import { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaCertificate,
  FaAward,
  FaLanguage,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import WorkExperienceModal from "./WorkExperienceModal";
import EducationalModal from "./EducationalModal";
import SkillModal from "./SkillModal";
import LicenseModal from "./LicenseModal";
import CertificateModal from "./CertificateModal";
import LanguageModal from "./LanguageModal";

const QualificationEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const sections = [
    {
      key: "workExperience",
      title: "Add most recent work experience",
      icon: <FaBriefcase />,
      modalComponent: "WorkExperienceModal",
    },
    {
      key: "education",
      title: "Add education",
      icon: <FaGraduationCap />,
      modalComponent: "EducationalModal",
    },
    {
      key: "skills",
      title: "Add skill",
      icon: <FaTools />,
      modalComponent: "SkillModal",
    },
    {
      key: "licenses",
      title: "Add licenses",
      icon: <FaCertificate />,
      modalComponent: "LicenseModal",
    },
    {
      key: "certifications",
      title: "Add certifications",
      icon: <FaAward />,
      modalComponent: "CertificateModal",
    },
    {
      key: "languages",
      title: "Add languages",
      icon: <FaLanguage />,
      modalComponent: "LanguageModal",
    },
  ];

  const handleOpenModal = (modalName: string) => {
    setModalType(modalName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleSave = () => {
    setIsModalOpen(false);
  };
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 h-screen lg:h-full flex flex-col justify-between max-w-2xl mx-auto">
      <button
        className="text-gray-600 mb-6 text-start lg:text-lg"
        onClick={() => navigate("/profile")}
      >
        &larr;
      </button>
      <div>
        <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-gray-700">
          Qualifications
        </h2>
        <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-10">
          We use these details to show you jobs that match your unique skills
          and experience.
        </p>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.key} className="border-b pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-gray-700 text-xl sm:text-2xl">
                    {section.icon}
                  </div>
                  <p className="text-blue-500 font-medium text-sm sm:text-base">
                    {section.title}
                  </p>
                </div>
                <button
                  className="text-blue-600 text-lg sm:text-xl font-bold"
                  onClick={() => handleOpenModal(section.modalComponent)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Render Logic */}
      {isModalOpen && modalType === "WorkExperienceModal" && (
        <WorkExperienceModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
      {isModalOpen && modalType === "EducationalModal" && (
        <EducationalModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
      {isModalOpen && modalType === "SkillModal" && (
        <SkillModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
      {isModalOpen && modalType === "LicenseModal" && (
        <LicenseModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
      {isModalOpen && modalType === "CertificateModal" && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
      {isModalOpen && modalType === "LanguageModal" && (
        <LanguageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}

      <footer className="mt-8 sm:mt-10 text-center text-sm text-gray-500">
        ©2025 SendJob - Cookies, Privacy, and Terms
      </footer>
    </div>
  );
};

export default QualificationEdit;
