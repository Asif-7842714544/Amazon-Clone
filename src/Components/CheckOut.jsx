import React from "react";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckOutBasketItems from "./CheckOutBasketItems";

function CheckOut() {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="flex p-5 bg-white h-max ">
      {/* CheckOut Left */}
      <div>
        <img
          className="w-full mb-[10px] mt-1 "
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div className="">
          <h3>{user?.email}</h3>
          <h2 className="mr-[10px] p-[10px] border-b-2 ">The Shopping Cart</h2>
          {/* CartItem */}
          {basket?.map((item, i) => (
            <CheckOutBasketItems
              key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      {/* CheckOut Right */}
      <div className="">
        <SubTotal />
      </div>
    </div>
  );
}

export default CheckOut;
