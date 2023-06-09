import React from "react";
import { useStateValue } from "./StateProvider";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket", basket);
  const addToBasket = () => {
    Store.addNotification({
      title: "Item Added to Cart",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: new Date().getTime().toString(),
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div
      key={id}
      className="flex flex-col z-1 items-center justify-end m-3 p-5 max-h[400px] w-full  min-w-[100px]  bg-white hover:scale-105 hover:shadow-rose-200 hover:shadow-lg"
    >
      {/* info */}
      <div className="h-[100px] mb-4 w-full   ">
        <p>{title}</p>
        <p>
          ₹<strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((e, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      {/* product image */}
      <div>
        <img
          className="object-contain mb-[15px] w-full max-h-[200px] "
          src={image}
        />
      </div>
      <button
        onClick={addToBasket}
        className="bg-[#f0c14b] border-solid border-[2px] border-[#a88734 #9c7231 #846a29] text-[#111] "
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
