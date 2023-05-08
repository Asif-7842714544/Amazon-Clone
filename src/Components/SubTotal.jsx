import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function SubTotal() {
    const[{basket},dispatch]=useStateValue()
  const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="flex flex-col  justify-between w-[250px] h-[150px] p-2 bg-[#f3f3f3] border-2 rounded ">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="flex items-center">
              <input className="" type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button className="border-2 rounded-lg text-center w-full  hover:bg-slate-400 ">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default SubTotal;
