import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBriefcase,
  FaDollarSign,
  FaMapMarkerAlt,
  FaTags,
} from "react-icons/fa";
import { jobTitleModal, JobTypeModal, PayModal, RelocationModal } from ".";

type ModalComponent = React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}>;

interface Section {
  key: string;
  title: string;
  icon: JSX.Element;
  modalComponent: ModalComponent;
}

const JobPreferenceEdit: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalComponent | null>(null);

  const sections: Section[] = [
    {
      key: "jobTitles",
      title: "Add job titles",
      icon: <FaBriefcase className="text-black" />,
      modalComponent: jobTitleModal,
    },
    {
      key: "jobType",
      title: "Add job type",
      icon: <FaTags className="text-black" />,
      modalComponent: JobTypeModal,
    },
    {
      key: "pay",
      title: "Add pay",
      icon: <FaDollarSign className="text-black" />,
      modalComponent: PayModal,
    },
    {
      key: "relocation",
      title: "Add relocation",
      icon: <FaMapMarkerAlt className="text-black" />,
      modalComponent: RelocationModal,
    },
  ];

  const handleOpenModal = (modalComponent: ModalComponent) => {
    setModalType(() => modalComponent);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleSave = () => {
    // Handle save logic here
    setIsModalOpen(false);
  };
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 h-screen max-w-2xl mx-auto flex flex-col justify-between">
      <button
        className="text-gray-600  text-start lg:text-lg"
        onClick={() => navigate("/profile")}
      >
        &larr;
      </button>
      <div>
        <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-gray-700">
          Job Preferences
        </h2>
        <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-10">
          Sharing preferences helps connect you with relevant jobs and
          employers.
        </p>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.key} className="border-b pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-xl sm:text-2xl">{section.icon}</div>
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

      {isModalOpen &&
        modalType &&
        React.createElement(modalType, {
          isOpen: isModalOpen,
          onClose: handleCloseModal,
          onSave: handleSave,
        })}

      <footer className="mt-8 sm:mt-10 text-center text-sm text-gray-500">
        ©2025 SendJob - Cookies, Privacy and Terms
      </footer>
    </div>
  );
};

export default JobPreferenceEdit;
