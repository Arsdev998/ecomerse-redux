import React from "react";
import navbar from "../data/navbar";
import { Link } from "react-router-dom";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-xl">
      <div className="flex flex-wrap justify-between pt-3 pb-3 w-10/12 m-auto">
        <div className="logo">
         <h1 className="text-[1.9rem] font-extrabold leading-none tracking-widest"><span className="text-red-500">A</span>KIRA</h1>
        </div>
        <ul className="flex flex-wrap text-base font-medium uppercase">
          {navbar.map((nav, index) => (
            <li key={index} className="mr-5">
              <Link className="hover:text-red-600" to={nav.path}>
                {nav.nav}
              </Link>
            </li>
          ))}
          <li></li>
        </ul>
        <div className="flex flex-wrap text-2xl">
            <Link className="mr-4 hover:text-red-600">
                <BiSearch/>
            </Link>
            <Link className="hover:text-red-600 relative">
                <BiShoppingBag/>

                <div className="items_count">
                    <span className="text-white">0</span>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
