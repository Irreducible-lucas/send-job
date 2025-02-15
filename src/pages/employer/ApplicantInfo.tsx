import { RecommendedCandidates } from "../../components";
import CandidateProfile from "../../components/CandidateProfile";

const ApplicantInfo = () => {
  return (
    <div className={"grid lg:grid-cols-3 gap-7 p-4 lg:p-8"}>
      <div className="lg:col-span-2">
        <CandidateProfile />
      </div>
      <div className="hidden lg:block">
        <h2 className="text-lg md:text-xl font-semibold">Recommend for you</h2>
        <RecommendedCandidates gridCols="grid-cols-1" />
      </div>
    </div>
  )
}

export default ApplicantInfo