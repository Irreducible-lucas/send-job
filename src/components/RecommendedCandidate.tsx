import { useNavigate } from "react-router-dom";
import { recommendedCandidates } from "../constant";

const RecommendedCandidate = ({ gridCols = "grid-cols-1" }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={`grid ${gridCols} gap-4 mt-4`}>
        {recommendedCandidates.map((candidate) => (
          <div key={candidate.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-3">
              <img
                src={candidate.image}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{candidate.name}</p>
                <p className="text-gray-500 text-sm">{candidate.role}</p>
              </div>
            </div>
            {candidate.experience.map((exp, index) => (
              <p key={index} className="text-sm text-gray-600 mt-2">
                {exp}
              </p>
            ))}
            <button
              className="mt-4 w-full border-[1px] border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
              onClick={() => navigate(`/profile/${candidate.id}`)}
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCandidate;
