import React from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const Topbar = () => {
  return (
    <div className="bg-red-600 p-2">
      <ul className="flex place-content-between">
        <li>
          <Link className="mr-2 text-white uppercase border-1-2 border-r-2 pr-4 pl-4">English</Link>
          <Link  className="mr-2 text-white uppercase border-1-2 border-r-2 pr-4 pl-4">USD</Link>
          <Link  className="mr-2 text-white uppercase pr-4 pl-4"> Free Shipping for all orders of $150</Link>
        </li>
        <li className="flex place-items-center">
        <Icon/>
          <Link className="mr-5 text-white uppercase border-r-2 border-1-2 pr-4 pl-4">Contact us</Link>
          <Link className="mr-5 text-white uppercase border-r-2 pl-4 pr-4">FAQs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
