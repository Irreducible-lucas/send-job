import { recruiters } from "../constant";
import { layout } from "../styles";
import Button from "./Button";
import RecruiterCard from "./RecruitersCard";

const TopRecruiters = () => {
  return (
    <section className={`${layout.section}`}>
      <h2 className="text-blue-600 font-medium text-center">Top Recruiters</h2>
      <h3 className="lg:text-4xl text-2xl font-bold text-gray-800 mt-2 text-center">
        Discover your next career move
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-5">
        {recruiters.map((recruiter) => (
          <RecruiterCard key={recruiter.id} {...recruiter} />
        ))}
      </div>
      <div className="mt-3 flex justify-center">
        <Button name="Show More" onClick={() => {}} />
      </div>
    </section>
  );
};

export default TopRecruiters;
