import { useNavigate } from "react-router-dom";
import { useGetRecommendedApplicantsByIdQuery } from "../rtk/services/application";
import { useAppSelector } from "../rtk/hooks";

const RecommendedCandidate = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const { data: applicants }: any = useGetRecommendedApplicantsByIdQuery({ id: currentUser?.id });

  return (
    <div>
      {applicants?.data.length === 0 ? (
        <div className="bg-white rounded-lg text-gray-600 font-bold mt-4 w-full h-[150px] grid place-items-center">
          <p>No recommended applicants yet</p>
        </div>
      ) : (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4`}>
          {applicants?.data?.map((applicant: any, index: number) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-3">
                <img
                  src={applicant?.photoUrl}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{applicant?.name}</p>
                  <p className="text-gray-500 text-sm">{applicant?.job_title}</p>
                </div>
              </div>
              {/* {candidate.experience.map((exp, index) => (
              <p key={index} className="text-sm text-gray-600 mt-2">
                {exp}
              </p>
            ))} */}
              <button
                className="mt-4 w-full border-[1px] border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                onClick={() => navigate(`/profile/${applicant?.userId}`)}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendedCandidate;
