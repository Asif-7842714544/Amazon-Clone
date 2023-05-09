import React from "react";
import Product from "./Product";
import SimpleImageSlider from "react-simple-image-slider";

function Home() {
  const images = [
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/HSS/May/HSS_3000x1200-PC-3._CB589991129_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Haircare-Herofader-PC._CB589996749_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/HSS/May/HSS_3000x1200-PC-1._CB589991128_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MAYGTM2022/2023/D11_HeroPC_3000x1200_rev._CB589422742_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopHeroTemplate_3000x1200v3._CB592770274_.jpg",
    },
  ];
  return (
    <div className=" flex justify-center ml-auto mr-auto max-w-[1500px] bg-gradient-to-b from-slate-300  ">
      <div className="">
        <div className="w-full z-[-1] mb-[-150px] gradient-mask-b-0 ">
          <SimpleImageSlider
            autoPlay
            slideDuration={0.4}
            width={896}
            height={504}
            images={images}
            showBullets={true}
          />
        </div>

        {/* <img
          className="w-full z-[-1] mb-[-150px] gradient-mask-b-0 "
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        /> */}
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
          <Product
            title="Apple iPad 9"
            price={80000}
            image="https://th.bing.com/th/id/R.33ad775161023ef497a047f33276a6cd?rik=gWhX8rbNjg1qsg&riu=http%3a%2f%2fwww.technologypep.com%2fwp-content%2fuploads%2f2017%2f03%2fipad-pro-2-get-it.jpg&ehk=hO0NZkJRDnvZaK2xSWC%2fmYT1HNzYRmQ8JJes8IGV4ZA%3d&risl=&pid=ImgRaw&r=0"
            rating={5}
          />
          <Product
            title="Apple Air Pods"
            price={50000}
            image="https://www.wirelessearbuds.best/wp-content/uploads/2020/02/710rzW2RGcL._SL1500_-2.jpg"
            rating={5}
          />
          <Product
            title="Vivo v27 Pro"
            price={50000}
            image="https://images.fonearena.com/blog/wp-content/uploads/2023/02/vivo-V27-Pro-1024x971.jpg"
            rating={5}
          />
        </div>
        <div className="flex z-1 ml-1 mr-1 ">
          <Product
            title="Samsung 36 inch Curved Tv"
            price={30000}
            image="https://images-na.ssl-images-amazon.com/images/I/91DmIujXGSL.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
