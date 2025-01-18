import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faCalendarAlt,
  faClipboardList,
  faCheckCircle,
  faUserCog,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

// Links with Font Awesome icons
const links = [
  {
    id: 1,
    text: "Dashboard",
    icon: faChartPie,
    url: "/dashboard",
  },
  {
    id: 2,
    text: "All Events",
    icon: faCalendarAlt,
    url: "/dashboard/event",
  },
  {
    id: 3,
    text: "Attendances Management",
    icon: faClipboardList,
    url: "/dashboard/attendance-management",
  },
  {
    id: 4,
    text: "Check in",
    icon: faCheckCircle,
    url: "/dashboard/check-in",
  },
  {
    id: 5,
    text: "Account Setting",
    icon: faUserCog,
    url: "/dashboard/account-setting",
  },
  {
    id: 6,
    text: "Billing",
    icon: faDollarSign,
    url: "/dashboard/billing",
  },
];

const SideNavLinks = () => {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  // Split links into two categories
  const homeLinks = links.filter((link) => link.id >= 1 && link.id <= 4);
  const settingLinks = links.filter((link) => link.id >= 5 && link.id <= 6);

  // Function to render a section of links with a heading
  const renderSection = (heading: string, sectionLinks: typeof links) => (
    <div className="mb-6">
      <h2 className="text-base text-slate-300 mb-1 ml-7">{heading}</h2>
      <div className="flex flex-col gap-4">
        {sectionLinks.map((link) => (
          <RouterLink key={link.id} to={link.url}>
            <div
              className="w-full px-4"
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className="flex items-center gap-4 group hover:bg-[#1B43C61A] py-3 px-4 rounded-full transition-all duration-200">
                <FontAwesomeIcon
                  icon={link.icon}
                  className={`w-6 text-lg transition-all duration-200 ${
                    hoveredLink === link.id ? "text-blue-600" : "text-white"
                  }`}
                />
                <p className="group-hover:text-blue-600 text-darkgrey group-hover:font-semibold text-md font-nunito">
                  {link.text}
                </p>
              </div>
            </div>
          </RouterLink>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {renderSection("Home", homeLinks)}
      {renderSection("Settings", settingLinks)}
    </div>
  );
};

export default SideNavLinks;
