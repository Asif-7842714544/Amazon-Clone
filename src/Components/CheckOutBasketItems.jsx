import React from "react";
import { useStateValue } from "./StateProvider";

function CheckOutBasketItems({id,image, title, price, rating }) {
  const[{basket},dispatch]=useStateValue()
  const removeFromBasket=()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id
    })
  }
  return (
    <div  className="flex mt-2 mb-2">
      <img className="object-contain w-[180px] h-[180px] " src={image} />
      <div className="pl-5 ">
        <p className="">{title}</p>
        <p className="">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((e, i) => (
              <p key={i} className="">⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="border-2 bg-[#f0c14b] mt-2 text-black hover:bg-yellow-800 ">Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckOutBasketItems;
