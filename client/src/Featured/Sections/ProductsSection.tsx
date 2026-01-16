"use client";
import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("Best seller");

  const tabs = ["Best seller", "New arrivals", "On Sale"];

  const products = [
    {
      id: 1,
      name: "Ribbed Tank Top",
      price: "$16.95",
      img: "https://themesflat.co/html/ecomus/images/products/orange-1.jpg",
      hoverImg: "https://themesflat.co/html/ecomus/images/products/white-3.jpg",
      colors: ["#FFA500", "#000000", "#FFFFFF"],
    },
    {
      id: 2,
      name: "Ribbed modal T-shirt",
      price: "From $18.95",
      discount: "-33%",
      countdown: "11d : 14h : 26m : 00s",
      img: "https://themesflat.co/html/ecomus/images/products/brown.jpg",
      hoverImg: "https://themesflat.co/html/ecomus/images/products/white-2.jpg",
      colors: ["#A52A2A", "#EE82EE", "#90EE90"],
    },
    {
      id: 3,
      name: "Oversized Printed T-shirt",
      price: "$10.00",
      img: "https://themesflat.co/html/ecomus/images/products/white-3.jpg",
      hoverImg:
        "https://themesflat.co/html/ecomus/images/products/orange-1.jpg",
      colors: ["#FFFFFF"],
    },
    {
      id: 4,
      name: "Oversized Printed T-shirt",
      price: "$16.95",
      img: "https://themesflat.co/html/ecomus/images/products/white-4.jpg",
      hoverImg: "https://themesflat.co/html/ecomus/images/products/black-4.jpg",
      colors: ["#FFFFFF", "#BA55D3", "#000000"],
    },
  ];

  return (
    <section className="py-20 px-[50px] max-w-[1540px] mx-auto bg-white">
      <div className="flex justify-center gap-10 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[24px] font-medium pb-2 transition-all relative ${
              activeTab === tab ? "text-black" : "text-gray-400"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
