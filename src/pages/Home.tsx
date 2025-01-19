import {
  FeaturedJobList,
  HeroSection,
  // JobCategorySection,
  // NewsCardList,
  // Testimonial,
  // TopRecruiters,
  NewsLetter,
  PostedJobs,
} from "../components";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <JobCategorySection /> */}
      <PostedJobs />
      <FeaturedJobList />
      {/* <TopRecruiters />
      <Testimonial />
      <NewsCardList /> */}
      <NewsLetter />
    </div>
  );
};

export default Home;
