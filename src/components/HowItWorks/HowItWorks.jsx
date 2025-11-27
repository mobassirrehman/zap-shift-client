import React from "react";
import {
  FaMapMarkerAlt,
  FaMoneyCheckAlt,
  FaTruck,
  FaBuilding,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-lime-900" />,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-2xl text-lime-900" />,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaTruck className="text-2xl text-lime-900" />,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaBuilding className="text-2xl text-lime-900" />,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-lime-900 mb-8">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl">
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lime-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
