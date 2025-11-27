import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogos = [amazon, vector, casio, moonstar, randstad, star, start];

const Brands = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#03373D] text-center mb-8">
          We've helped thousands of sales teams
        </h2>
        <Swiper
          loop={true}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          speed={3000}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="brand-swiper"
        >
          {brandLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt=""
                className="h-8 object-contain mx-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="border-t-2 border-dashed border-[#03373D]/30 mt-12"></div>
      </div>
    </section>
  );
};

export default Brands;
