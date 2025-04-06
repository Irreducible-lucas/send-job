import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { footerLinks } from "../constant";
import { FooterProps } from "../type";
import { layout } from "../styles";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
     {/* <div
         className={`${layout.section} grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-8`}
      > */}
        {/* Logo and Description */}
        {/* <div className="col-span-2">
          <h2 className="text-2xl font-bold text-blue-600">Jobs Hub</h2>
          <p className="mt-2 text-sm text-gray-600">
            Explore all the most exciting job roles based on your interest...
          </p>
          <p className="mt-4">
            <span className="block text-sm text-gray-800">
              Email: jobshub.com
            </span>
            <span className="block text-sm text-gray-800">
              Call: +14-424-424-4242
            </span>
          </p>
        </div> */}

        {/* Dynamic Sections */}
        {/* {footerLinks.map((section: FooterProps, index: number) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-blue-600">
              {section.title}
            </h3>
            <ul className="mt-2 space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}

      <div className="container mx-auto px-4 mt-8 border-t pt-4 flex justify-between items-center flex-col md:flex-row space-y-5 py-8">
        <p className="text-sm text-gray-500">
          Copyright © 2025 All Rights Reserved.
          {/* by{" "}
          <span className="text-blue-500 font-bold">SEND Jobs</span>  */}
          
        </p>
        <div className="flex space-x-4 text-gray-600">
          <a href="#" className="hover:text-blue-500">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
