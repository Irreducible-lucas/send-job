import { layout } from "../styles";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
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
        <div className="bg-white shadow-lg rounded-md p-2 flex flex-col md:flex-row  items-center justify-between">
          <select
            className="w-full md:w-1/3 outline-0 rounded p-2 text-gray-600"
            defaultValue="Select Category"
          >
            <option disabled>Select Category</option>
            <option>Design</option>
            <option>Development</option>
            <option>Marketing</option>
          </select>
          <div className="w-full md:w-1/3 relative">
            <input
              type="text"
              placeholder="Search location"
              className="w-full outline-0 p-2 text-gray-600"
            />
            <span className="absolute top-1/2 right-1 transform -translate-y-1/2 text-gray-400">
              📍
            </span>
          </div>
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
