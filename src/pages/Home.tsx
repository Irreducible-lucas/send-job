import {
  FeaturedJobList,
  HeroSection,
  MatchedJob,
  NewsLetter,
} from "../components";

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
