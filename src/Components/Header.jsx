import { Search, ShoppingCart } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebaseConfig";

function Header() {
  const [{ basket,user }, dispatch] = useStateValue();
const handleAurhentication=()=>{
  if(user){
    auth.signOut()
  }
}
  return (
    <div className="h-[60px]  flex items-center bg-black sticky top-0 z-[10] text-white ">
      <Link to="/">
        <img
          className="w-[150px] mt-4 mr-2 ml-2   "
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="flex flex-1 items-center rounded-3xl  ">
        <input type='text' className="h-3 p-[12px] border-none w-full " />
        <Search className="bg-orange-700 p-1 " fontSize="medium" />
      </div>
      <div className="flex justify-evenly ">
        <Link to={!user && '/login'}>
          <div onClick={handleAurhentication} className="flex flex-col ml-[10px] mr-[10px]  ">
            <span className="text-xs ">Hello Guest</span>
            <span className="text-[13px] font-bold ">{user? 'Sign out': 'signin'}</span>
          </div>
        </Link>
        <div className="flex flex-col ml-[10px] mr-[10px]  ">
          <span className="text-xs ">Return Orders</span>
          <span className="text-[13px] font-bold ">& Orders</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="flex items-center text-white ">
          <ShoppingCart />
          <span className="ml-[10px] mr-[10px] ">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
