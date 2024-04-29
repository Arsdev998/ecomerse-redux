import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { bannar_down, banners } from "../data/Data";
const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    nextArrow: <BiChevronRight/>,
    prevArrow: <BiChevronLeft/>
  };
  return (
    <div>
      <div className="w-10/12 h-10/12 m-auto">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="relative">
              <img src={banner.banner} alt="banner" />
              <div className="banner-items">
                <h2>All Collections</h2>
                <h1>Get up to 50% Off Select Styles</h1>
                <button className="mt-4 btn pt-3 pb-3  pl-6 pr-6">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="bnd flex gap-8 mt-8 ">
          {bannar_down.map((val,index)=>(
            <div className="w-1/3 overflow-hidden relative" key={index}>
              <img className="transition-transform  hover:scale-110 duration-700" src={val.img} alt="bannerwoman" />
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2  translate-y-1/2  mt-4 btn pt-3 pb-3 pr-6 pl-6">{val.name}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
