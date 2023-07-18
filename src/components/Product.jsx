import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("item added to cart")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id))
    toast.error("Your Item Remove From Cart")
  }

  return (
    <div className="flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-5 transition duration-300 ease-in rounded hover:shadow-2xl relative">
      
      <div>
        <p className="w-40 mt-1 text-lg font-semibold text-left text-gray-700 truncate">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-left text-[10px]">
          {post.description.split(" ").slice(0,10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src= {post.image} alt="" className="w-full h-full"/>
      </div>

      <div className="flex items-center justify-between w-full gap-12 mt-5">
        
          <p className="font-semibold text-green-600">
            ${post.price}
          </p>
        
        {
          cart.some((p) => p.id === post.id) ?
          (<button 
            className="text-gray-700 border-2 border-gray-700 text-[12px] font-semibold p-1 px-3 
            uppercase hover:bg-gray-700 hover:text-white
            transition duration-300 ease-in rounded-full"
          onClick={removeFromCart}>
            Remove Item
          </button>) :
          (<button
            className="text-gray-700 border-2 border-gray-700 text-[12px] font-semibold p-1 px-3 
            uppercase hover:bg-gray-700 hover:text-white
            transition duration-300 ease-in rounded-full"
          onClick={addToCart} >
            Add To Cart
          </button>)
        }  
      </div>
    </div>
  )
};

export default Product;
