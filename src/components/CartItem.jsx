import { toast } from "react-hot-toast";
import {AiFillDelete} from "react-icons/ai"
import { remove } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const CartItem = ({item, itemIndex}) => {

  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.error("item removed");
  }
 
  return (
    <div className={"p-6 " + ((cart.length-1 === itemIndex) ? '' : 'border-b-[2px] border-gray-600')}>
      <div className="flex flex-col items-center justify-between gap-10 p-0 md:items-start md:p-3 md:flex-row"> 
        <div className="w-[26%]">
          <img src={item.image} alt=""
          className="object-fill h-full" />
        </div>
          
        <div  className="flex flex-col items-baseline gap-5 w-[100%] md:w-[65%]">
          
            <h1 className="text-xl font-semibold text-gray-700">
              {item.title}
            </h1>
            <h1 className="mt-3 text-sm">
              {item.description.split(" ").slice(0,15).join(" ") + "..."}
            </h1>
          
          <div className="flex justify-between w-full px-3">
            <p className="text-xl font-bold text-green-600">
              ${item.price}
            </p>
            <div 
            className="group hover:bg-red-400 cursor-pointer h-[40px] w-[40px] flex justify-center items-center rounded-full bg-red-300 "
            onClick={removeFromCart}> 
              <AiFillDelete className="text-red-800  group-hover:text-white"/>
            </div>
          </div>
        </div>
        <div className="mt-2 ">
          <div className="border-b-2 border-black"></div>
        </div>
      
    </div>
    </div>
    
  )
};

export default CartItem;
