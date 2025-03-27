import { useGetRecommendedApplicantsByIdQuery } from "../rtk/services/application";
import { useAppSelector } from "../rtk/hooks";
import ViewApplicantModal from "./employer/ViewApplicantModal";

const RecommendedCandidate = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const { data: applicants, isLoading }: any = useGetRecommendedApplicantsByIdQuery({ id: currentUser?.id });

  if(isLoading) {
    return (
      <div className="bg-white rounded-lg text-gray-600 font-bold mt-4 w-full h-[150px] grid place-items-center">
          <p>Loading recommended applicants...</p>
      </div>
    )
  }

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
                  className="w-12 h-12 rounded-full object-cover object-center"
                />
                <div className="flex-1">
                  <p className="font-semibold">{applicant?.name}</p>
                  <p className="text-gray-500 text-sm">{applicant?.job_title}</p>
                </div>
              </div>
              <ViewApplicantModal applicant={applicant}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendedCandidate;
