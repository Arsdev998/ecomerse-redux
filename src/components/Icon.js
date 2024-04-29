import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Icon = () => {
  return (
    <div className="">
      <div className="flex">
        <Link className="text-white text-xl mr-6">
          <FaFacebook />
        </Link>
        <Link className="text-white text-xl mr-6">
          <FaLinkedin />
        </Link>
        <Link className="text-white text-xl mr-6">
          <FaYoutube />
        </Link>
        <Link className="text-white text-xl mr-6">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Icon;
