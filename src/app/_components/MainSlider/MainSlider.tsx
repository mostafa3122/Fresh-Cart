"use client";
import Image from "next/image";
import slid5 from "../../../../public/slider/grocery-banner-2.jpeg";
import slid4 from "../../../../public/slider/grocery-banner.png";
import slid1 from "../../../../public/slider/slider-image-1.jpeg";
import slid2 from "../../../../public/slider/slider-image-2.jpeg";
import slid3 from "../../../../public/slider/slider-image-3.jpeg";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";

function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container px-4 mx-auto mt-8 md:mt-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 items-stretch">
        {/* Main Slider */}
        <div className="col-span-1 lg:col-span-3">
          <Slider {...settings}>
            <div>
              <Image
                src={slid1}
                alt="image 1 of slider"
                className="h-[180px] sm:h-[250px] md:h-[320px] lg:h-[400px] w-full object-cover "
                priority
              />
            </div>
            <div>
              <Image
                src={slid2}
                alt="image 2 of slider"
                className="h-[180px] sm:h-[250px] md:h-[320px] lg:h-[400px] w-full object-cover "
              />
            </div>
            <div>
              <Image
                src={slid3}
                alt="image 3 of slider"
                className="h-[180px] sm:h-[250px] md:h-[320px] lg:h-[400px] w-full object-cover "
              />
            </div>
          </Slider>
        </div>

        {/* Side Images */}
        <div className="col-span-1 flex flex-col ">
          <Image
            src={slid4}
            alt="image 4 of slider"
            className="h-[90px] sm:h-[125px] md:h-[160px] lg:h-[200px] w-full object-cover "
          />
          <Image
            src={slid5}
            alt="image 5 of slider"
            className="h-[90px] sm:h-[125px] md:h-[160px] lg:h-[200px] w-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
