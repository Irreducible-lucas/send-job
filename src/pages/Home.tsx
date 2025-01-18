import {
  HeroSection,
  NewsCardList,
  NewsLetter,
  PostedJobs,
  Testimonial,
  TopRecruiters,
} from "../components";
import JobCategorySection from "../components/JobCategorySection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <JobCategorySection />
      <PostedJobs />
      <TopRecruiters />
      <Testimonial />
      <NewsCardList />
      <NewsLetter />
    </div>
  );
};

export default Home;
