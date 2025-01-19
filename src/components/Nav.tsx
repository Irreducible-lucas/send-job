import { useState } from "react";
import { links } from "../constant";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [openChildMenu, setOpenChildMenu] = useState<number | null>(null); // Child menu toggle for small devices

  const toggleChildMenu = (id: number) => {
    setOpenChildMenu(openChildMenu === id ? null : id); // Toggle child menu on small devices
  };

  const handleMouseEnter = (id: number) => {
    setOpenChildMenu(id); // Open child menu on hover
  };

  const handleMouseLeave = () => {
    setOpenChildMenu(null); // Close child menu when leaving
  };

  return (
    <nav className="bg-blue-50 p-4 flex items-center justify-between z-10 relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
          <span>+</span>
        </div>
        <h1 className="text-xl font-bold text-red-400">
          Jobs <span className="text-gray-800">Hub</span>
        </h1>
      </div>

      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden block text-blue-500 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Links Section */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:space-x-6 md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-blue-50 md:bg-transparent md:p-0 p-4 space-y-4 md:space-y-0`}
      >
        <ul className="md:flex md:space-x-6">
          {links.map((link) => (
            <li
              key={link.id}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(link.id)} // Open menu on hover
              onMouseLeave={handleMouseLeave} // Close menu on leave
            >
              {/* Parent Link */}
              <div className="flex items-center justify-between">
                <a
                  href={link.url}
                  className="block text-gray-800 hover:text-blue-500 transition-colors"
                >
                  {link.text}
                </a>
                {/* Small devices: Toggle child menu on click */}
                {link.child && (
                  <button
                    className="md:hidden ml-2 text-blue-500 focus:outline-none"
                    onClick={() => toggleChildMenu(link.id)} // Toggle child menu visibility on click
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-transform ${
                        openChildMenu === link.id ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* Child Links */}
              {link.child && (
                <>
                  {/* Large Devices */}
                  <ul
                    className={`absolute bg-white shadow-lg rounded-md mt-2 w-48 z-50 hidden md:block ${
                      openChildMenu === link.id ? "block" : "hidden"
                    }`}
                  >
                    {link.child.map((childLink) => (
                      <li
                        key={childLink.id}
                        className="px-4 py-2 hover:bg-blue-100"
                      >
                        <a
                          href={childLink.url}
                          className="block text-gray-800 hover:text-blue-500 transition-colors"
                        >
                          {childLink.text}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Small Devices */}
                  <ul
                    className={`${
                      openChildMenu === link.id ? "block" : "hidden"
                    } md:hidden space-y-2 mt-2`}
                  >
                    {link.child.map((childLink) => (
                      <li key={childLink.id} className="pb-2">
                        <a
                          href={childLink.url}
                          className="block text-gray-800 hover:text-blue-500 transition-colors pl-4"
                        >
                          {childLink.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
          <button className="w-full md:w-auto px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100 transition">
            Sign Up
          </button>
          <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Post Job for Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
