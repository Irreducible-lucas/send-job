import { motion } from "framer-motion";
import styles from "../styles";
import { AboutCarousal, FeaturedJobList, JobList } from "../components";
import { event } from "../assets";
import { SearchJobs } from "../components";
import { jobCategories } from "../constant";
import { useGetAllJobsQuery } from "../rtk/services/jobs";
import { useNavigate } from "react-router-dom";
import FeaturedJobCard from "../components/FeaturedJobCard";
import { Job } from "../type";
const JobsPage = () => {
  const title = "all";
  const country = "all";

  const { data, isLoading } = useGetAllJobsQuery(
    { title, country },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  let navigate = useNavigate();

  const handleNavigate = (item: any) => {
    navigate(`/jobs/${item.job_title}`, {
      state: { state: item },
    });
  };

  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-white w-full overflow-hidden"
    >
      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutCarousal
            image={event}
            title={"Jobs"}
            content={
              "Explore the bylaws and ordinances of Kono District Council, which provide the legal framework for governing the district, regulating public conduct, and ensuring the orderly development and management of community resources and services."
            }
          />
        </div>
      </div>
      <div>
        <SearchJobs regions={[]} jobs={[]} jobClassifications={jobCategories} />
        {/* <PostedJob showHeading={false} /> */}

        <JobList />
      </div>
    </motion.div>
  );
};

export default JobsPage;
