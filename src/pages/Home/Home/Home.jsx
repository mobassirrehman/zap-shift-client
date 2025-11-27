import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../../../components/HowItWorks/HowItWorks";
import OurServices from "../../../components/OurServices/OurServices";
import Brands from "../Brands/Brands";
import WhyChooseUs from "../../../components/WhyChooseUs/WhyChooseUs";
import MerchantCTA from "../../../components/MerchantCTA/MerchantCTA";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <WhyChooseUs></WhyChooseUs>
      <MerchantCTA></MerchantCTA>
    </div>
  );
};

export default Home;
