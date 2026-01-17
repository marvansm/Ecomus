"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../Components/ProductCard";
import Loading from "../Components/Loading";
import api from "@/services/api";

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("Best seller");
  const [isTabLoading, setIsTabLoading] = useState(false);
  const tabs = ["Best seller", "New arrivals", "On Sale"];

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.getData("/products"),
  });

  const handleTabChange = (tab: string) => {
    setIsTabLoading(true);
    setActiveTab(tab);
    setTimeout(() => {
      setIsTabLoading(false);
    }, 400);
  };

  if (isLoading || isTabLoading) return <Loading />;
  if (error)
    return (
      <div className="text-center py-20 text-red-500 font-bold">Error!</div>
    );

  const filteredProducts = products?.filter((p: any) => {
    if (activeTab === "Best seller") return p.isBestSeller;
    if (activeTab === "New arrivals") return p.isNewArrival;
    if (activeTab === "On Sale") return p.isOnSale;
    return true;
  });

  return (
    <section className="py-20 px-[50px] max-w-[1540px] mx-auto bg-white">
      <div className="flex justify-center gap-10 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
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
        {filteredProducts?.map((product: any) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.title}
            price={`$${product.price}`}
            oldPrice={product.oldPrice ? `$${product.oldPrice}` : undefined}
            img={product.images.main}
            hoverImg={product.images.hover}
            colors={product.colors.map((c: any) => c.hex)}
            discount={product.isOnSale ? "Sale" : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
