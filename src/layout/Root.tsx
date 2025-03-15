import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Footer, JobApplicationModal, NavBar } from "../components";
import { useAppDispatch, useAppSelector } from "../rtk/hooks";
import { setJobAppModalOpen } from "../rtk/features/user/jobSlice";

const Root = () => {
  const {isJobAppModalOpen} = useAppSelector((state) => state.job)
  const dispatch = useAppDispatch();
  return (
    <motion.div
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="w-full overflow-hidden"
    >
      <NavBar />
  
      <div className={``}>
        <Outlet />
        {isJobAppModalOpen && (
            <JobApplicationModal onClose={() => dispatch(setJobAppModalOpen(false))} />
          )}
      </div>
  
      <Footer />
    </motion.div>
  );
}

export default Root;
