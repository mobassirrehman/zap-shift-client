import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { id: "story", label: "Story" },
    { id: "mission", label: "Mission" },
    { id: "success", label: "Success" },
    { id: "team", label: "Team & Others" },
  ];

  const tabContent = {
    story: (
      <>
        <p className="text-gray-600 mb-6">
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p className="text-gray-600 mb-6">
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p className="text-gray-600">
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
      </>
    ),
    mission: (
      <p className="text-gray-600">
        Our mission is to revolutionize parcel delivery across Bangladesh by
        providing fast, secure, and affordable logistics solutions. We aim to
        empower businesses and individuals with seamless delivery experiences,
        backed by cutting-edge technology and a dedicated team committed to
        excellence.
      </p>
    ),
    success: (
      <p className="text-gray-600">
        With over 10,000+ successful deliveries and a growing network of
        satisfied customers, ZapShift has become a leading name in courier
        services. Our success is measured by the trust our customers place in
        us, and we continue to expand our reach while maintaining the highest
        standards of service quality.
      </p>
    ),
    team: (
      <p className="text-gray-600">
        Behind ZapShift is a passionate team of logistics experts, tech
        innovators, and customer service professionals. Together, we work
        tirelessly to ensure every parcel is handled with care and delivered
        with precision. Our riders, support staff, and management team share a
        common goal — your satisfaction.
      </p>
    ),
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-[#03373D] mb-4">
          About Us
        </h1>
        <p className="text-gray-500 mb-8 max-w-lg">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <div className="border-t border-gray-200 mb-8"></div>
        <div className="flex flex-wrap gap-6 md:gap-10 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-base md:text-lg font-medium pb-1 transition-all ${
                activeTab === tab.id
                  ? "text-[#03373D] border-b-2 border-[#03373D]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[200px]">{tabContent[activeTab]}</div>
      </div>
    </section>
  );
};

export default AboutUs;
