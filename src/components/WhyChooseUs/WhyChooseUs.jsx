import React from "react";
import trackingImg from "../../assets/logo/live-tracking.png";
import safeDeliveryImg from "../../assets/logo/safe-delivery.png";
import supportImg from "../../assets/logo/safe-delivery.png";

const WhyChooseUs = () => {
  const features = [
    {
      image: trackingImg,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      image: safeDeliveryImg,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      image: supportImg,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="border-r-2 border-dashed border-gray-300 pr-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#03373D] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
