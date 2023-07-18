import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  
  
  const {cart} = useSelector((state) => state)

  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    setTotalAmount(cart.reduce ((acc,curr)=> acc + curr.price,0))
  },[cart])



  return (
    <div>
      {
        cart.length > 0 ? 
        (
          <div className="max-w-[1200px] mx-auto py-6 flex flex-col md:flex-row gap-5 justify-center">
            <div className="w-[100%] md:w-[60%] flex flex-col p-2">
              {
                cart.map((item,index) => (
                  <CartItem key={item.id} item ={item} itemIndex={index} />
                ))
              }
            </div>

            <div className="w-[100%] md:w-[40%] my-14 md:p-0 p-14 flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="text-xl font-semibold text-green-800 uppercase">
                  Your Cart
                </div>
                <div className="text-5xl font-semibold text-green-700 uppercase">
                  Summary 
                </div>
                <p className="mt-3 mb-3 text-xl font-semibold text-gray-700">
                  <span>Total item : {cart.length}</span>
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-xl font-semibold text-gray-700"> 
                  Total Amount : <span className="font-bold text-black">${totalAmount}</span>
                </p>
                <button className="px-20 py-2 font-bold text-white bg-green-700 rounded-md">
                  Check Out Now
                </button>
              </div>
            </div>


          </div>
        ) : 
        (
          <div className="flex flex-col items-center justify-center gap-5 mt-[14rem]">
            <h1 className="text-lg font-bold ">Your Cart is Empty!</h1>
            <Link to={"/"}>
              <button className="px-12 py-2 font-bold text-white bg-green-700 rounded-md">Shop Now</button>
            </Link>
          </div>
        )
      }
    </div>
  )
};

export default Cart;
