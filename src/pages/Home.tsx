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
import { useGetMatchedJobsQuery } from "../rtk/services/jobs";

const Home = () => {
  const userId: any = 5;
  const { data, error } = useGetMatchedJobsQuery(userId, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div>
      <HeroSection />
      {/* <JobCategorySection /> */}
      {data && data.data.length > 0 && <PostedJobs data={data.data} />}
      <FeaturedJobList />
      {/* <TopRecruiters />
      <Testimonial />
      <NewsCardList /> */}
      <NewsLetter />
    </div>
  );
};

export default Home;
