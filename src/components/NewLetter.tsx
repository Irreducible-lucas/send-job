import { ellipse } from "../assets";
import { layout } from "../styles";

const Newsletter = () => {
  return (
    <div className={`${layout.section} relative bg-blue-900 text-white `}>
      {/* Background Dots */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 opacity-80"></div> */}
      {/* Profile Images */}
      {/* <div className="absolute top-5 left-10 flex space-x-4">
        <img
          src={ellipse}
          alt="User 1"
          className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
        />
        <img
          src={ellipse}
          alt="User 2"
          className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
        />
      </div>
      <div className="absolute -bottom-8 right-10 flex space-x-4">
        <img
          src={ellipse}
          alt="User 3"
          className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
        />
        <img
          src={ellipse}
          alt="User 4"
          className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
        />
      </div> */}
      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-2 text-lg md:text-xl">
          Get the latest updates mailed to you
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="px-4 py-2 w-72 md:w-96 text-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
