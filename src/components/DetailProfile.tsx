import { RecommendedCandidates } from ".";
import { layout } from "../styles";
import CandidateProfile from "./CandidateProfile";

const DetailProfile = () => {
  return (
    <div className={`${layout.section} grid lg:grid-cols-3 gap-7`}>
      <div className="lg:col-span-2">
        <CandidateProfile />
      </div>
      <div className="hidden lg:block">
        <h2 className="text-lg md:text-xl font-semibold">Recommend for you</h2>
        <RecommendedCandidates gridCols="grid-cols-1" />
      </div>
    </div>
  );
};

export default DetailProfile;
