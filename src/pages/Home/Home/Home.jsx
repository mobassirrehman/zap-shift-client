import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../../../components/HowItWorks/HowItWorks";
import OurServices from "../../../components/OurServices/OurServices";
import Brands from "../Brands/Brands";
import WhyChooseUs from "../../../components/WhyChooseUs/WhyChooseUs";
import MerchantCTA from "../../../components/MerchantCTA/MerchantCTA";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <WhyChooseUs></WhyChooseUs>
      <MerchantCTA></MerchantCTA>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
