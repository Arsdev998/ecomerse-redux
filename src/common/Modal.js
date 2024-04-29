import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isModalOpen, data, handleClose }) => {
  return (
    <div className="">
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content w-2/3 relative bg-white overflow-auto">
            <span
              onClick={() => handleClose()}
              className="hover:text-red-600 cursor-pointer"
            >
              <FaTimes />
            </span>
            <div className="flex">
              <div className="relative">
                <div className="modal-poster">
                  <img src={data.img} alt="" className="max-w-none" />
                </div>
                <div className="tag absolute top-0 z-10">
                  <p className="bg-green-600 m-2 rounded-full w-12 h-12 grid place-items-center text-white">
                    {data.tag}
                  </p>
                </div>
              </div>
              <div className="modal-info ml-6">
                <p className="text-4xl">{data.short_description}</p>
                <p className="mt-4 text-2xl">{data.title}</p>
                <div className="flex justify-center mb-2 text-yellow-400">
                  {data.rating &&
                    data.rating.map((star, index) => (
                      <p key={index}>{star.icon}</p>
                    ))}
                </div>
                <p className="text-red-600">${data.price}</p>
                <p className="mt-2">${data.description}</p>
                <div className="">
                  <p className="font-semibold">Size: </p>
                  <div className="size-btn mt-4 mb-4">
                    <button className="mt-4 btn  ml-2 btn pt-3 pb-3 pl-6 pr-6">Small</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
