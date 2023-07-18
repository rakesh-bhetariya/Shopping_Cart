import {AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import SearchModel from "./SearchModel";
// import { useState, navigate, notifyWarn } from "react";

const Navbar = () => {
  

  const {cart} = useSelector((state) => state);
 
  
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5 ">
            <img src="./logo.png" 
            alt="" 
            className="w-[200px]" />
          </div>
        </NavLink>

        <div className="flex items-center mr-5 space-x-6 font-medium text-slate-100">
          <NavLink to="/">
            <p className="hover:text-green-600">Home</p>
          </NavLink>
          
          <NavLink to="/cart">
            <div className="reltive">
              <AiOutlineShoppingCart className="text-2xl hover:text-green-600"/>
              {
                cart.length > 0 && <span 
                className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-green-600 rounded-full top-5  right-[109px]">
                  {cart.length}
                </span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
