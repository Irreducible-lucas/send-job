import { Logo, LogoWhite } from "../assets";
import NavBarLinks from "./NavBarLink";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ fill = true }: { fill?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`${
        fill ? "bg-blue-50" : "bg-transparent"
      } flex justify-between lg:grid lg:grid-cols-[200px_1fr] items-center  p-4 z-50 gap-x-20 `}
    >
      <NavLink to={"/"} className="hover:cursor-pointer">
        <img
          src={fill ? Logo : LogoWhite}
          alt="Logo Image"
          className="h-[50px] lg:h-[60px] object-contain"
        />
      </NavLink>
      <NavBarLinks fill={fill} isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex items-center justify-between gap-8 lg:gap-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={`w-8 h-8 lg:hidden hover:cursor-pointer ${
            fill ? "fill-blue-500" : "fill-white"
          }`}
          onClick={() => setIsOpen(true)}
          fill=""
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
    </nav>
  );
};

export default NavBar;
