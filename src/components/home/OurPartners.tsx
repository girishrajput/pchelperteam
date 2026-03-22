"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';

// --- CRITICAL: Import Swiper styles ---
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const PARTNERS = [
  { id: 1, name: 'Partner One', logo: 'https://via.placeholder.com/150x80?text=Logo+1' },
  { id: 2, name: 'Partner Two', logo: 'https://via.placeholder.com/150x80?text=Logo+2' },
  { id: 3, name: 'Partner Three', logo: 'https://via.placeholder.com/150x80?text=Logo+3' },
  { id: 4, name: 'Partner Four', logo: 'https://via.placeholder.com/150x80?text=Logo+4' },
  { id: 5, name: 'Partner Five', logo: 'https://via.placeholder.com/150x80?text=Logo+5' },
  { id: 6, name: 'Partner Six', logo: 'https://via.placeholder.com/150x80?text=Logo+6' },
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
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.6,
                    transition: '0.3s'
                  }} 
                  onMouseOver={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.opacity = '0.6';
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}