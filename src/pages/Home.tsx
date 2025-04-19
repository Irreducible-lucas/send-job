import {
  FeaturedJobList,
  HeroSection,
  MatchedJob,
  NewsLetter,
} from "../components";
import { useAppSelector } from "../rtk/hooks";

const Home = () => {
  const { currentUser }: any = useAppSelector((state) => state.auth);

  return (
    <div>
      <HeroSection />

      {currentUser && currentUser.role === "seeker" && <MatchedJob />}

      <FeaturedJobList />

      <NewsLetter />
    </div>
  );
};

export default Home;
