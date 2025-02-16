import { companyStats } from "../constant";

const CompanyStatCard = () => {
  return (
    <div className="flex items-center justify-center mt-5 ">
      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm w-full max-w-sm">
        {companyStats.map((stat, index) => (
          <div key={stat.label} className="flex items-center">
            <div className="text-center">
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className="text-xl font-semibold text-gray-800">
                {stat.value}
              </p>
            </div>
            {index < companyStats.length - 1 && (
              <div className="h-8 w-px bg-gray-300 mx-4"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyStatCard;
