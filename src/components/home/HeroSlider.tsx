"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Build Powerful Websites",
    desc: "Modern web development using Next.js and React.",
    image: "/images/banner-1.png",
  },
  {
    id: 2,
    title: "Grow Your Business Online",
    desc: "Professional website design and digital marketing.",
    image: "/images/banner-2.png",
  },
  {
    id: 3,
    title: "Fast & SEO Friendly",
    desc: "High performance websites optimized for Google.",
    image: "/images/banner-3.png",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[500px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[500px] flex items-center justify-left">

              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Animated Content */}
              <div className="absolute max-w-6xl leading-0 flex items-left justify-left text-left text-white px-6">
                <div>

                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-xl mb-6"
                  >
                    {slide.desc}
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="bg-red-600 p-6 rounded-lg hover:bg-red-700 transition"
                  >
                    Get Started
                  </motion.button>
            
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}