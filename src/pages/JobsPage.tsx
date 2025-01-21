import { motion } from "framer-motion";
import styles from "../styles";
import { AboutCarousal } from "../components";
import { event } from "../assets";
import { SearchJobs } from "../components";
import PostedJob from "../components/PostedJob";
import { jobCategories } from "../constant";
const JobsPage = () => {
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

        <PostedJob showHeading={false} />
      </div>
    </motion.div>
  );
};

export default JobsPage;
