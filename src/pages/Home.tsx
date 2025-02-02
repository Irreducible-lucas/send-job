import { useSearchParams } from "react-router-dom";
import {
  FeaturedJobList,
  HeroSection,
  MatchedJob,
  NewsLetter,
  PostedJobs,
  SavedJobsTab,
} from "../components";
import { useEffect } from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <MatchedJob />

      <FeaturedJobList />

      <NewsLetter />
    </div>
  );
};

export default Home;
