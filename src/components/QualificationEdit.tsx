import { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaCertificate,
  FaAward,
  FaLanguage,
} from "react-icons/fa";
import ModalDialog from "./ModalDialog";

interface Field {
  name: string;
  label: string;
  required: boolean;
  type: "input" | "select" | "two-selects";
  options?: string[];
  selects?: {
    name: string;
    label: string;
    options: string[];
  }[];
}

interface Section {
  key: string;
  title: string;
  icon: JSX.Element;
  fields: Field[];
}

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
          name: "yearsOfExperience",
          label: "Years of experience",
          required: false,
          type: "input",
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
        { name: "company", label: "Company", required: false, type: "input" },
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

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 w-full max-w-md sm:max-w-lg">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-700">
          Qualifications
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          We use these details to show you jobs that match your unique skills
          and experience.
        </p>

        <div className="space-y-4">
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
          >
            <h3 className="text-lg font-semibold mb-4">
              {
                sections.find((section) => section.key === currentSection)
                  ?.title
              }
            </h3>
            {sections
              .find((section) => section.key === currentSection)
              ?.fields.map((field) => {
                if (field.type === "input") {
                  return (
                    <div key={field.name} className="mb-4">
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700"
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
                        className="w-full border rounded-lg p-2 text-sm text-gray-700"
                      />
                    </div>
                  );
                }

                if (field.type === "select") {
                  return (
                    <div key={field.name} className="mb-4">
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700"
                      >
                        {field.label}
                      </label>
                      <select
                        id={field.name}
                        value={formValues[field.name] || ""}
                        onChange={(e) =>
                          handleInputChange(field.name, e.target.value)
                        }
                        className="w-full border rounded-lg p-2 text-sm text-gray-700"
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
                    <div
                      key={field.name}
                      className="mb-4 grid grid-cols-2 gap-4"
                    >
                      {field.selects?.map((select) => (
                        <div key={select.name}>
                          <label
                            htmlFor={select.name}
                            className="block text-sm font-medium text-gray-700"
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
    </div>
  );
};

export default QualificationEdit;
