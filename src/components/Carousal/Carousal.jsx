import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Cimg5 from "../../assets/carousal_5.webp";
import Cimg6 from "../../assets/carousal_6.webp";
import Cimg8 from "../../assets/carousal_8.webp";
import Cimg9 from "../../assets/carousal_9.webp";
import Cimg10 from "../../assets/carousal_10.webp";
import "./carousal.css";

function ImgCarousel() {
  const imgs = [Cimg5, Cimg6, Cimg8, Cimg9, Cimg10];
  return (
    <div className="carousal-wrapper">
      <Carousel
        autoPlay={true}
        interval={800}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {imgs.map((img) => (
          <div className="carousal-img">
            <img src={img} alt="carousal" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
