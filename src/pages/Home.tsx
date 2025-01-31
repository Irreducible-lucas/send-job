import {
  FeaturedJobList,
  HeroSection,
  // JobCategorySection,
  // NewsCardList,
  // Testimonial,
  // TopRecruiters,
  NewsLetter,
  PostedJobs,
  SavedJobsTab,
} from "../components";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <JobCategorySection /> */}
      <PostedJobs />
      <SavedJobsTab />
      <FeaturedJobList />
      {/* <TopRecruiters />
      <Testimonial />
      <NewsCardList /> */}
      <NewsLetter />
    </div>
  );
};

export default Home;
