import { motion } from "framer-motion";
import styles from "../styles";
import { AboutCarousal, PostedJobs } from "../components";
import { event } from "../assets";
import { SearchJobs } from "../components";
import { jobCategories } from "../constant";
import { useSearchJobQuery } from "../rtk/services/jobs";
import { useNavigate, useSearchParams } from "react-router-dom";
const JobsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsObj = Object.fromEntries([...searchParams]);

  const { data, isLoading, error } = useSearchJobQuery(
    { searchParamsObj, pageNum: "1", limit: 10 }, // Pass an object
    { refetchOnMountOrArgChange: true }
  );

  // if (isLoading) return <p>Loading jobs...</p>;
  // if (error) return <p>Error fetching jobs</p>;

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
        {data && data.data.length > 0 && <PostedJobs showHeading={false} />}
      </div>
    </motion.div>
  );
};

export default JobsPage;
