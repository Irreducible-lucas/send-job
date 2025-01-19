import { motion } from "framer-motion";
import styles, { layout } from "../styles";
import { AboutCarousal } from "../components";
import { event } from "../assets";
const PostJob = () => {
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
            title={"Post Job"}
            content={
              "Explore the bylaws and ordinances of Kono District Council, which provide the legal framework for governing the district, regulating public conduct, and ensuring the orderly development and management of community resources and services."
            }
          />
        </div>
      </div>
      <div className={`${layout.section} `}>{/*  */}</div>
    </motion.div>
  );
};

export default PostJob;
