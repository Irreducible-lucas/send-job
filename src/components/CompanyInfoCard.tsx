import { CompanyInfoProps } from "../type";

const CompanyInfoCard = ({
  logo,
  title,
  company,
  postedDate,
}: CompanyInfoProps) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
        <img src={logo} alt="Company Logo" className="w-10 h-10" />
      </div>
      <h2 className="text-xl font-bold mt-3">{title}</h2>
      <p className="text-gray-500 my-1">{company}</p>
      <p className="text-gray-400 text-sm">{postedDate}</p>
    </div>
  );
};

export default CompanyInfoCard;
