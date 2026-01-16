import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Collections = () => {
  const categories = [
    {
      name: "Men's",
      count: "9 items",
      img: "https://themesflat.co/html/ecomus/images/collections/collection-circle-2.jpg",
    },
    {
      name: "Jewelry",
      count: "31 items",
      img: "https://themesflat.co/html/ecomus/images/collections/collection-circle-3.jpg",
    },
    {
      name: "Sneakers",
      count: "21 items",
      img: "https://themesflat.co/html/ecomus/images/collections/collection-circle-4.jpg",
    },
    {
      name: "Bags",
      count: "5 items",
      img: "https://themesflat.co/html/ecomus/images/collections/collection-circle-5.jpg",
    },
    {
      name: "Glasses",
      count: "14 items",
      img: "https://themesflat.co/html/ecomus/images/collections/collection-circle-6.jpg",
    },
    {
      name: "New arrivals",
      count: "31 items",
      img: "https://themesflat.co/html/ecomus/images/collections/collection-circle-7.jpg",
    },
  ];

  return (
    <section className="bg-[#FAF8F2] ">
      <div className="py-[100px] px-[50px] max-w-[1540px] mx-auto">
        <div className="flex items-end justify-between mb-12 ">
          <h2 className="text-[36px] font-medium text-black">
            Season Collection
          </h2>
          <Link
            href="/shop"
            className="flex items-center gap-1 text-[14px] font-bold text-black border-b border-black pb-1 hover:text-[#db1215] hover:border-[#db1215] transition-all"
          >
            View all categories <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden mb-5 bg-gray-100">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-[17px] font-semibold text-black mb-1">
                {cat.name}
              </h3>
              <p className="text-[14px] text-gray-500">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
