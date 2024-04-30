import React from "react";
import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";

const Modal = ({ isModalOpen, data, handleClose }) => {
  const addItemToCart = (product)=>{
    alert(product)
  }
  return (
    <div className="">
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content w-2/3 relative bg-white overflow-auto">
            <span
              onClick={() => handleClose()}
              className="absolute top-0 right-0 p-4 hover:text-red-600 cursor-pointer"
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
                <div className="flex items-center ">
                  <p className="font-semibold">Size: </p>
                  <div className=" size-btn mt-4 mb-4">
                    <button className=" btn  ml-2 btn pt-1 pb-1 pl-3 pr-3 text-white">
                      Small
                    </button>
                    <button className=" btn  ml-2 btn pt-1 pb-1 pl-3 pr-3 text-white">
                      Large
                    </button>
                    <button className=" btn  ml-2 btn pt-1 pb-1 pl-3 pr-3 text-white">
                      Extra Large
                    </button>
                  </div>
                </div>
                <p className="text-green-700">In Stock 300 Items</p>
                <div className="">
                  <div className="flex items-center">
                    <div className="flex mr-3">
                      <button className="border mt-4 pb-3 pt-3 pr-6 pl-6">
                        <PiMinus/>
                      </button>
                      <span className="border mt-4 pb-3 pt-3 pr-6 pl-6 count">00</span>
                      <button className="border mt-4 pb-3 pt-3 pr-6 pl-6">
                        <PiPlus/>
                      </button>
                    </div>
                    <div className="add-to-cart mr-3 mt-3">
                      <button className="pt-3 pb-3 pl-6 pr-6 text-white" onClick={()=>addItemToCart(data)}>Add To Cart</button>
                    </div>
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
