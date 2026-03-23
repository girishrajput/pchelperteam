"use client";

import React from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';

// --- CRITICAL: Import Swiper styles ---
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const PARTNERS = [
  { id: 1, name: 'Partner One', logo: '/home/1-1.png' },
  { id: 2, name: 'Partner Two', logo: '/home/2-1.png' },
  { id: 3, name: 'Partner Three', logo: '/home/3-1.png' },
  { id: 4, name: 'Partner Four', logo: '/home/4-1.png' },
  { id: 5, name: 'Partner Five', logo: '/home/5-1.png' },
  { id: 6, name: 'Partner Six', logo: '/home/6-1.png' },
];

export default function OurPartners() {
  return (
    <section style={{ 
      padding: '60px 20px', 
      background: '#ffffff',
      width: '100%',
      overflow: 'hidden' // Prevents horizontal scroll glitches
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '40px', 
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#333'
        }}>
          Our Partners
        </h2>
        
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
            },
          }}
          style={{ paddingBottom: '30px' }}
        >
          {PARTNERS.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '80px',
                padding: '10px'
              }}>
                <Image 
                  src={partner.logo} 
                  alt={partner.name}
                  width={140}
                  height={80}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}