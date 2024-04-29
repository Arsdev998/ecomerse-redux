import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feateures } from "../data/Data";
import { BiCart } from "react-icons/bi";
const Featur = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <div className="w-10/12 m-auto">
        <Slider {...settings}>
          {feateures.map((val, index) => (
            <div className="feature flex gap-8 mt-8">
              <div className="overflow-hidden relative m-2">
                <div className="image-container relative">
                  <img src={val.img} alt="img" className="w-full"/>
                  <div>
                    <div>
                        <button><BiCart/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featur;
