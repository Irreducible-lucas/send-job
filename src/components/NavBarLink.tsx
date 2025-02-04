import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/dropdown-menu";
import { Logo } from "../assets";
import { links } from "../constant";
import { FaUserCircle } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../rtk/hooks";
import { logOut } from "../rtk/features/user/authSlice";

const NavBarLinks = ({
  fill,
  isOpen,
  setIsOpen,
}: {
  fill: boolean;
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <ul
        className={`${
          isOpen
            ? "fixed top-0 left-0 w-full flex flex-col gap-4 bg-white p-2 z-50"
            : "hidden"
        } lg:flex lg:items-center lg:justify-between`}
      >
        <div className="lg:hidden flex items-center justify-between w-full">
          <NavLink to={"/"}>
            <img src={Logo} alt="Logo Image" className="h-[50px] lg:h-[70px]" />
          </NavLink>

          <div className="flex gap-2 items-center">
            <NavLink
              to="/profile"
              className={`flex items-center gap-2 text-lg hover:text-blue-500 ${
                fill ? "text-blue-500" : "text-white"
              }`}
            >
              <FaUserCircle className="w-6 h-6" />
            </NavLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className={`w-8 h-8 lg:hidden hover:cursor-pointer fill-black`}
              onClick={() => setIsOpen(false)}
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
        </div>

        {/* Links section for large devices */}
        {links.map((link) => (
          <div key={link.id}>
            {link.child ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className={"group flex gap-2 items-center"}>
                    <span
                      className={`${
                        isOpen
                          ? "text-black"
                          : fill
                          ? "text-black"
                          : "text-white"
                      } group-hover:text-blue-500 text-sm`}
                    >
                      {link.text}
                    </span>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        fill ? "stroke-darkgrey" : "stroke-white"
                      } group-hover:stroke-blue-500`}
                    >
                      <path
                        d="M1.46631 1.24185L4.98355 4.75816L8.49987 1.24185"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.child.map((children) => (
                    <DropdownMenuItem key={children.id}>
                      <NavLink to={children.url}>
                        {({ isActive }) => (
                          <div className={"flex items-center justify-center"}>
                            <span
                              className={`${
                                isActive
                                  ? "text-black"
                                  : "text-black hover:text-blue-500"
                              } text-sm`}
                            >
                              {children.text}
                            </span>
                          </div>
                        )}
                      </NavLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NavLink to={link.url} key={link.id}>
                {({ isActive }) => (
                  <div className={"lg:flex lg:items-center lg:justify-center"}>
                    <span
                      className={`text-sm ${
                        isActive
                          ? "text-red-500"
                          : "text-black hover:text-blue-500"
                      }`}
                    >
                      {link.text}
                    </span>
                  </div>
                )}
              </NavLink>
            )}
          </div>
        ))}

        {/* Buttons section */}
        <div className="md:flex md:space-x-4 space-y-2 md:space-y-0 flex-col-reverse lg:flex-row">
          <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Post Job for Free
          </button>

          {!auth?.token ? (
            <div className="flex gap-2">
              <a href="/login">
                <button className="w-full md:w-auto px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100 transition">
                  Login
                </button>
              </a>
              <a href="/sign-up">
                <button className="w-full md:w-auto px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100 transition">
                  Sign Up
                </button>
              </a>
            </div>
          ) : (
            <div className="flex gap-2">
              <NavLink
                to="/profile"
                className={`flex items-center gap-2 text-lg hover:text-blue-500 ${
                  fill ? "text-blue-500" : "text-white"
                }`}
              >
                <FaUserCircle className="w-8 h-8" />
              </NavLink>
              <button
                onClick={() => handleLogout()}
                className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </ul>
    </>
  );
};

export default NavBarLinks;
