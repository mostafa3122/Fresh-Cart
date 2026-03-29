"use client";

import { Icategory } from "@/app/interface/category.interface";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function CategorySlider({ dataList }: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 3,
    slidesToShow: 7,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <div className="w-[90%] mx-auto mt-16 ">
        <h2 className="h2-style ">Featured Categories</h2>
        <Slider {...settings}>
          {dataList.map((category: Icategory) => (
            <div
              key={category._id}
              className=" relative w-full h-[230px] text-gray-500 hover:text-green-600 transition-colors duration-200"
            >
              <Image
                src={category.image}
                fill
                
                alt={category.name || "Category Image"}
                className=" object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                
              />
              <p className="text-center  text-xl my-2">
                {category.name || "Unnamed Category"}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* <div className="w-[95%] sm:w-[90%] mx-auto mt-16">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
    Featured Categories
  </h2>

  <Slider {...settings}>
    {dataList.map((category: Icategory) => (
      <div
        key={category._id}
        className="flex flex-col items-center text-gray-500 hover:text-green-600 transition-colors duration-200 p-2"
      >
        <Image
          src={category.image}
          width={200}
          height={200}
          alt={category.name || "Category Image"}
          className="w-full sm:h-[200px] h-[150px] object-cover rounded-md shadow-sm"
        />
        <p className="text-center text-lg sm:text-xl mt-2 font-medium">
          {category.name || "Unnamed Category"}
        </p>
      </div>
    ))}
  </Slider>
</div> */}
    </>
  );
}

export default CategorySlider;
