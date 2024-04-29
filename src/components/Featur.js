import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feateures } from "../data/Data";
import { BiCart, BiGitCompare, BiHeart, BiSearch } from "react-icons/bi";
import Modal from "../common/Modal";
const Featur = () => {
  const [isModalOpen, setModalOpen] = useState(null);
  const handleOpen = (productId) => {
    setModalOpen(productId);
  };
  const handleClose = () => {
    setModalOpen(null);
  };
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
            <div key={index} className="feature flex gap-8 mt-8">
              <div className="overflow-hidden relative m-2">
                <div className="image-container relative">
                  <img src={val.img} alt="img" className="w-full" />
                  <div className="hidden absolute bottom-0 bg-red-700 opacity-65 hover:opacity-100 cursor-pointer text-white pt-4 pb-4 transition-all w-full">
                    <div className="flex justify-center align-middle">
                      <button className="text-2xl">
                        <BiCart />
                      </button>
                      <button
                        className="uppercase whitespace-nowrap"
                        onClick={() => handleOpen(val.id)}
                      >
                        {val.btn}
                      </button>
                    </div>
                  </div>
                  <div className="tag absolute top-0 ">
                    <p className="bg-green-600 m-2 rounded-full w-12 h-12 grid place-items-center text-white">
                      {val.tag}
                    </p>
                  </div>
                  <div className="absolute bg-white top-0 right-0 p-4 m-4">
                    <div className="mb-4">
                      <BiGitCompare />
                    </div>
                    <div className="mb-4">
                      <BiSearch />
                    </div>
                    <div className="mb-4">
                      <BiHeart />
                    </div>
                  </div>
                </div>
                <div className="products-detail text-center mt-2">
                  <p className="mb-2">{val.short_description}</p>
                  <p className="mb-2">{val.title}</p>
                  <div className="flex justify-center mb-2 text-yellow-400">
                    {val.rating &&
                      val.rating.map((star, index) => (
                        <p key={index}>{star.icon}</p>
                      ))}
                  </div>
                  <p className="text-red-600">${val.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* add modal button disini */}
      <Modal
        isModalOpen={isModalOpen !== null}
        data={feateures.find((feature) => feature.id === isModalOpen)}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Featur;
