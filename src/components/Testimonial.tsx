import { useState, useEffect } from "react";
import { testimonials } from "../constant";
import { layout } from "../styles";
import Button from "./Button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 2;
        return nextIndex >= testimonials.length ? 0 : nextIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 2
  );

  return (
    <section className={`${layout.section} bg-gray-50`}>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-5 gap-x-10">
        {/* Header */}
        <div className="text-left mb-10">
          <h3 className="text-blue-600 font-semibold uppercase">
            Testimonials
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Quotes from our customers about us
          </h2>
          <p className="text-gray-500">
            You need to create an account to find the best and preferred job.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          {/* Show More Button */}
          <Button name=" Show More Quotes" onClick={() => {}} />
        </div>

        {/* Testimonials */}
        <div className="relative w-full">
          {/* Testimonials Content */}
          <div className="grid gap-6 w-full">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white shadow-lg rounded-xl p-6 relative"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map(
                    (_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.211c.969 0 1.371 1.24.588 1.81l-3.41 2.467a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.411 2.467c-.785.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.56 9.383c-.783-.57-.38-1.81.588-1.81h4.211a1 1 0 00.95-.69l1.286-3.956z" />
                      </svg>
                    )
                  )}
                </div>
                <div className="mt-3 ">
                  <p className="text-gray-700 italic">{testimonial.message}</p>
                  <h4 className="text-gray-900 font-bold mt-3">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="absolute inset-x-0 -bottom-6 flex items-center justify-center space-x-3 lg:inset-y-0 lg:-left-[37rem] xl:-left-[40rem] lg:flex-col lg:justify-center lg:space-y-3 lg:space-x-0">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index * 2)}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index * 2 ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
