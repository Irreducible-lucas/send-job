import { useState } from "react";
import { jobCategories } from "../constant";
import { layout } from "../styles";
import HeroSlider from "./HeroSlider";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Search from "./Search";

const HeroSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <section
      className={`${layout.sectionImg} pl-4 md:pl-[40px] lg:pl-[60px] bg-blue-50 flex flex-col-reverse md:flex-row items-center justify-between`}
    >
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        {/* Tagline */}
        <div className="items-center justify-center md:justify-start space-x-2 hidden lg:flex">
          <div className="w-6 h-6 text-orange-100 bg-orange-500 rounded-lg flex items-center justify-center p-3">
            ✓
          </div>
          <p className="text-gray-600 text-sm font-medium">
            Comfort & Flexible Jobs with Us
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Find Your <span className="text-blue-500">Dreams Jobs</span> Platform
        </h1>

        {/* Subheading */}
        <p className="text-gray-600">
          Study major. Your dream job is waiting for you.
        </p>

        {/* Search Form */}
        <div className="bg-white shadow-lg rounded-md p-2 flex flex-col md:flex-row items-center justify-between">
          {/* <select
            className="w-full md:w-1/3 outline-0 rounded p-2 text-gray-600"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option disabled>Select Category</option>
            <option>Design</option>
            {jobCategories.map((item, index) => (
              <option key={index.toString()}>{item.title}</option>
            ))}
          </select> */}
          <Search />
          <button className="w-full md:w-auto bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Find Job
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 flex justify-end relative">
        <HeroSlider />
      </div>
    </section>
  );
};

export default HeroSection;
