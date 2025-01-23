import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Hero2, Hero3, HeroImage } from "../assets";

const LoginLeft = () => {
  return (
    <div className="hidden md:flex text-white w-full min-h-screen">
      <div className="w-full h-full">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={2000}
          showArrows={false}
          showStatus={false}
          className="h-full"
        >
          {[HeroImage, Hero2, Hero3].map((image, index) => (
            <div key={index} className="h-screen">
              {" "}
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LoginLeft;
