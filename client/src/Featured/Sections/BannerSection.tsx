"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function BannerSection() {
  const slides = [
    {
      title: "Effortless Elegance",
      subtitle: "Embrace the sun-kissed season with our collection of breezy",
      img: "https://themesflat.co/html/ecomus/images/slider/fashion-06-slide3.jpg",
      bg: "#f1f2e6",
    },
    {
      title: "Summer Escapades",
      subtitle: "Discover the perfect outfits for your next tropical getaway",
      img: "https://themesflat.co/html/ecomus/images/slider/fashion-06-slide1.jpg",
      bg: "#f1f2e6",
    },
  ];

  return (
    <div className="banner-swiper-container relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        className="h-[750px]    "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full">
              <div
                className="w-1/2 h-full flex items-center px-20"
                style={{ backgroundColor: slide.bg }}
              >
                <div className="max-w-[500px] w-full">
                  <h1 className="text-[72px] font-normal leading-[1.1] text-black mb-6 opacity-0 animate-[fade-up_0.8s_ease-out_forwards]">
                    {slide.title}
                  </h1>
                  <p className="text-[18px] text-gray-700 mb-10 opacity-0 animate-[fade-up_0.8s_ease-out_0.2s_forwards]">
                    {slide.subtitle}
                  </p>
                  <button className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-sm text-[15px] font-semibold hover:bg-black hover:text-white transition-all duration-300 opacity-0 animate-[fade-up_0.8s_ease-out_0.4s_forwards]">
                    Shop collection <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="w-1/2 h-full">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="custom-pagination absolute bottom-12 left-20 z-10 flex items-center gap-2 w-fit opacity-0 animate-[fade-up_0.8s_ease-out_0.6s_forwards]"></div>
      </Swiper>

      <style jsx global>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .custom-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #000;
          opacity: 0.2;
          margin: 0 !important;
          border-radius: 50%;
          transition: all 0.3s;
          cursor: pointer;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 10px;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
