import React from "react";
import { Link } from "react-router-dom";
import merchant from "../../assets/logo/be-a-merchant-bg.png";
import location_merchant from "../../assets/logo/location-merchant.png";

const MerchantCTA = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="border-t-2 border-dashed border-[#03373D]/30 mb-12"></div>
        <div className="bg-[#03373D] rounded-3xl p-8 md:p-10 lg:p-12 relative overflow-hidden">
          <img
            src={merchant}
            alt=""
            className="absolute top-0 left-0 w-full h-auto object-cover pointer-events-none"
          />
          <img
            src={location_merchant}
            alt=""
            className="hidden md:block absolute right-4 md:right-6 lg:right-12 xl:right-16 top-1/2 -translate-y-1/2 w-48 md:w-56 lg:w-72 xl:w-80 h-auto object-contain pointer-events-none"
          />
          <div className="relative z-10 md:max-w-[60%] lg:max-w-[55%]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Merchant and Customer Satisfaction is Our First Priority
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6 lg:mb-8">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. ZapShift courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/register"
                className="btn bg-[#c2f84a] hover:bg-[#b0e043] text-[#03373D] border-none rounded-full px-6 sm:px-8 text-sm sm:text-base"
              >
                Become a Merchant
              </Link>
              <Link
                to="/rider-apply"
                className="btn btn-outline border-[#c2f84a] text-[#c2f84a] hover:bg-[#c2f84a] hover:text-[#03373D] rounded-full px-6 sm:px-8 text-sm sm:text-base"
              >
                Earn with ZapShift Courier
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-dashed border-[#03373D]/30 mt-12"></div>
      </div>
    </section>
  );
};

export default MerchantCTA;
