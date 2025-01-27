import { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaCertificate,
  FaAward,
  FaLanguage,
  FaTimes,
} from "react-icons/fa";
import ModalDialog from "./ModalDialog";
import { Section } from "../type";

const QualificationEdit = () => {
  const [inputs, setInputs] = useState<{
    [key: string]: Record<string, string>[];
  }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const sections: Section[] = [
    {
      key: "workExperience",
      title: "Add most recent work experience",
      icon: <FaBriefcase />,
      fields: [
        { name: "jobTitle", label: "Job title", required: true, type: "input" },
        { name: "company", label: "Company", required: false, type: "input" },
      ],
    },
    {
      key: "education",
      title: "Add education",
      icon: <FaGraduationCap />,
      fields: [
        {
          name: "levelOfEducation",
          label: "Level of education",
          required: true,
          type: "input",
        },
        {
          name: "fieldOfStudy",
          label: "Field of study",
          required: false,
          type: "two-selects",
          selects: [
            {
              name: "degree",
              label: "Degree",
              options: ["Bachelor's", "Master's", "PhD"],
            },
            {
              name: "specialization",
              label: "Specialization",
              options: ["Engineering", "Arts", "Sciences"],
            },
          ],
        },
      ],
    },
    {
      key: "skills",
      title: "Add skill",
      icon: <FaTools />,
      fields: [
        {
          name: "skill",
          label: "Skill",
          required: true,
          type: "input",
        },
        {
          name: "yearOfExperience",
          label: "Years of experience",
          required: false,
          type: "select",
          options: ["1", "2", "3"],
        },
      ],
    },
    {
      key: "licenses",
      title: "Add licenses",
      icon: <FaCertificate />,
      fields: [
        {
          name: "licenseName",
          label: "License name",
          required: true,
          type: "input",
        },

        {
          name: "licenseType",
          label: "License type",
          required: true,
          type: "two-selects",
          selects: [
            {
              name: "licenseCategory",
              label: "Category",
              options: ["Engineering", "Healthcare", "Finance"],
            },
            {
              name: "licenseState",
              label: "State",
              options: ["California", "Texas", "Florida"],
            },
          ],
        },
      ],
    },
    {
      key: "certifications",
      title: "Add certifications",
      icon: <FaAward />,
      fields: [
        {
          name: "certificationName",
          label: "Certification name",
          required: true,
          type: "input",
        },

        {
          name: "certificationType",
          label: "Certification type",
          required: true,
          type: "two-selects",
          selects: [
            {
              name: "certificationCategory",
              label: "Category",
              options: ["Security", "IT", "HR"],
            },
            {
              name: "certificationLevel",
              label: "Level",
              options: ["Beginner", "Intermediate", "Advanced"],
            },
          ],
        },
      ],
    },
    {
      key: "languages",
      title: "Add languages",
      icon: <FaLanguage />,
      fields: [
        { name: "language", label: "Language", required: true, type: "input" },
        {
          name: "proficiency",
          label: "Proficiency",
          required: true,
          type: "select",
          options: ["Beginner", "Intermediate", "Advanced", "Native"],
        },
      ],
    },
  ];

  const handleOpenModal = (key: string) => {
    setCurrentSection(key);
    setFormValues({});
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentSection(null);
    setFormValues({});
  };

  const handleInputChange = (name: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (currentSection) {
      setInputs((prev) => ({
        ...prev,
        [currentSection]: [...(prev[currentSection] || []), formValues],
      }));
    }
    handleCloseModal();
  };

  const handleSaveAndAddAnother = () => {
    if (currentSection) {
      setInputs((prev) => ({
        ...prev,
        [currentSection]: [...(prev[currentSection] || []), formValues],
      }));
      setFormValues({});
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 h-screen max-w-2xl mx-auto ">
      <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-gray-700">
        Qualifications
      </h2>
      <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-10">
        We use these details to show you jobs that match your unique skills and
        experience.
      </p>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.key} className="border-b pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-gray-700 text-xl sm:text-2xl">
                  {section.icon}
                </div>
                <p className="text-gray-600 font-medium text-sm sm:text-base">
                  {section.title}
                </p>
              </div>
              <button
                className="text-blue-600 text-lg sm:text-xl font-bold"
                onClick={() => handleOpenModal(section.key)}
              >
                +
              </button>
            </div>

            {inputs[section.key] && inputs[section.key].length > 0 && (
              <ul className="mt-4 space-y-2">
                {inputs[section.key].map((input, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    {JSON.stringify(input)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && currentSection && (
        <ModalDialog
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
          onAddAnother={
            currentSection === "licenses" || currentSection === "certifications"
              ? handleSaveAndAddAnother
              : undefined
          }
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-center w-full">
              {
                sections.find((section) => section.key === currentSection)
                  ?.title
              }
            </h3>

            <button
              className="text-gray-600 text-base sm:text-lg"
              onClick={handleCloseModal}
            >
              <FaTimes />
            </button>
          </div>

          {sections
            .find((section) => section.key === currentSection)
            ?.fields.map((field) => {
              if (field.type === "input") {
                return (
                  <div key={field.name} className="mb-4">
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    <input
                      type="text"
                      id={field.name}
                      value={formValues[field.name] || ""}
                      onChange={(e) =>
                        handleInputChange(field.name, e.target.value)
                      }
                      className="w-full border-b-2 border-gray-300 p-2 text-sm text-gray-700 focus:outline-none focus:border-blue-500 hover:border-blue-300"
                    />
                  </div>
                );
              }

              if (field.type === "select") {
                return (
                  <div key={field.name} className="mb-4">
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {field.label}
                    </label>
                    <select
                      id={field.name}
                      value={formValues[field.name] || ""}
                      onChange={(e) =>
                        handleInputChange(field.name, e.target.value)
                      }
                      className="w-full border rounded-lg p-2 text-sm text-gray-700 "
                    >
                      <option value="">Select</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              if (field.type === "two-selects") {
                return (
                  <div key={field.name} className="mb-4 grid grid-cols-2 gap-4">
                    {field.selects?.map((select) => (
                      <div key={select.name}>
                        <label
                          htmlFor={select.name}
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          {select.label}
                        </label>
                        <select
                          id={select.name}
                          value={formValues[select.name] || ""}
                          onChange={(e) =>
                            handleInputChange(select.name, e.target.value)
                          }
                          className="w-full border rounded-lg p-2 text-sm text-gray-700"
                        >
                          <option value="">Select</option>
                          {select.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                );
              }

              return null;
            })}
        </ModalDialog>
      )}
    </div>
  );
};

export default QualificationEdit;
