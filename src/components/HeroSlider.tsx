import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Hero2, Hero3, Hero4, HeroImage } from "../assets";

const HeroSlider = () => {
  return (
    <div className="hidden md:block md:[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_10%_100%)]">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop
        interval={3000}
        showArrows={true}
        showStatus={false}
      >
        {[HeroImage, Hero2, Hero3, Hero4].map((image, index) => (
          <img
            key={index}
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-[500px]"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
