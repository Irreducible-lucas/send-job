import { JobDescriptionProps } from "../type";

const CompanyJobDescription = ({
  title,
  description,
  responsibilities,
  skills,
  workplaceType,
  jobType,
  specialization,
  role,
  experience,
  budget,
}: JobDescriptionProps) => {
  return (
    <div className="py-2 px-1">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div>
        <h3 className="text-sm font-semibold mb-2">Key Responsibilities</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
          {responsibilities.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Skills</h3>
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 border-t pt-3">
        <h3 className="text-sm font-semibold mb-3">Additional Information</h3>
        <div className="text-sm text-gray-600">
          <div className="mb-2">
            <strong>Workplace type:</strong>
            <div>{workplaceType}</div>
          </div>
          <div className="mb-2">
            <strong>Job Type:</strong>
            <div>{jobType}</div>
          </div>
          <div className="mb-2">
            <strong>Job Specialisation:</strong>
            <div>{specialization}</div>
          </div>
          <div className="mb-2">
            <strong>Job Role:</strong>
            <div>{role}</div>
          </div>
          <div className="mb-2">
            <strong>Experience:</strong>
            <div>{experience}</div>
          </div>
          <div className="mb-2">
            <strong>Budget:</strong>
            <div>{budget}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyJobDescription;
