import { recruiterProps } from "../type";

const RecruiterCard = ({
  company,
  jobs,
  location,
  rating,
  reviews,
  logo,
}: recruiterProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3  relative mt-14">
      <div className="flex items-center justify-between">
        <div>
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-16 h-16 absolute -top-1/4  rounded-md"
          />
        </div>

        <div className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm inline-block">
          {jobs} Jobs
        </div>
      </div>
      <h4 className="font-bold text-lg mt-5">{company}</h4>
      <div className="flex justify-between items-center gap-1 text-yellow-500 my-2">
        {"★".repeat(Math.round(rating))}
        <span className="text-gray-600">({reviews})</span>
      </div>
      <p className="text-sm text-gray-600">{location}</p>
    </div>
  );
};

export default RecruiterCard;
