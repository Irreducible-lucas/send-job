import { logo } from "../assets";
import styles from "../styles";
import SideNavLinks from "./SideNavLink";

const SideNav = () => {
  return (
    <div className={`bg-blue-950 text-white h-full grid grid-rows-[70px_1fr]`}>
      <div className={`flex items-center justify-center p-3 shadow-sm`}>
        <div className={`flex items-center justify-center `}>
          <img src={logo} className="w-20" alt="Logo Image" />
          <h1 className={`${styles.heading3} ml-2`}>EVENTMAN</h1>
        </div>
      </div>
      <div className="mt-5">
        <SideNavLinks />
      </div>
    </div>
  );
};

export default SideNav;
