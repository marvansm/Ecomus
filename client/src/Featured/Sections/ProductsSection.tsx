"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
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

  if (isLoading) return <Loading />;

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
    <section className="py-20 px-12.5 max-w-385 mx-auto bg-white">
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
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
            )}
          </button>
        ))}
      </div>

      <div className="min-h-100">

        <AnimatePresence mode="wait">
          {isTabLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Loading />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10"
            >
              {filteredProducts?.map((product: any) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  name={product.title}
                  price={`$${product.price}`}
                  oldPrice={
                    product.oldPrice ? `$${product.oldPrice}` : undefined
                  }
                  img={product.images.main}
                  hoverImg={product.images.hover}
                  colors={product.colors.map((c: any) => c.hex)}
                  discount={product.isOnSale ? "Sale" : undefined}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductsSection;
