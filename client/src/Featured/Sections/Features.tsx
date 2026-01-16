import React from "react";
import { Box, CreditCard, RotateCcw, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Box size={32} strokeWidth={1.5} />,
      title: "Free Shipping",
      desc: "Free shipping over order $120",
    },
    {
      icon: <CreditCard size={32} strokeWidth={1.5} />,
      title: "Flexible Payment",
      desc: "Pay with Multiple Credit Cards",
    },
    {
      icon: <RotateCcw size={32} strokeWidth={1.5} />,
      title: "14 Day Returns",
      desc: "Within 30 days for an exchange",
    },
    {
      icon: <Headphones size={32} strokeWidth={1.5} />,
      title: "Premium Support",
      desc: "Outstanding premium support",
    },
  ];

  return (
    <section className="py-16 px-[50px] bg-white border-b border-gray-100">
      <div className="max-w-[1540px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-black shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="text-[18px] font-semibold text-black mb-1">
                {item.title}
              </h3>
              <p className="text-[14px] text-gray-500 leading-tight">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
