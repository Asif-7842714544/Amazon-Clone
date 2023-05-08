import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className=" flex justify-center ml-auto mr-auto max-w-[1500px]  ">
      <div className="">
        <img
          className="w-full z-[-1] mb-[-150px] gradient-mask-b-0 "
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="flex z-1 ml-1 mr-1 ">
          <Product
          
            title="Samsung Mobile"
            price={40000}
            image="https://th.bing.com/th/id/OIP.VP9HF69Yl0-SvDXFb9xCVAHaEK?w=294&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            rating={4}
          />
          <Product 
          
          title="Samsung Galaxy"
          price={45677}
          image="https://jamonline.ph/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Philippines-65.jpg"
          rating={5}
          />
        </div>
        <div className="flex z-1 ml-1 mr-1 ">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="flex z-1 ml-1 mr-1 ">
          <Product  />
        </div>
      </div>
    </div>
  );
}

export default Home;
