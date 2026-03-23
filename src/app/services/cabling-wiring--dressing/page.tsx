"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Network, Headset, Cloud, Settings, HardDrive, Layout } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader'

const SERVICE_DATA = [
  {
    title: "Network",
    desc: "As cloud services rely on networks, PCHelperTeam's IT network monitoring and control services are now essential for IT.",
    icon: Network,
  },
  {
    title: "Help Desk",
    desc: "Maximizing service effectiveness, fixing issues, and promoting ongoing service innovation are PCHelperTeam's round-the-clock support goals.",
    icon: Headset,
  },
  {
    title: "An All-Inclusive Set of Cloud Tools",
    desc: "Receive managed cloud solutions for quick and accurate problem identification and diagnosis with us.",
    icon: Cloud,
  },
  {
    title: "Co-Managed or Fully Managed Services",
    desc: "We will do as you ask! Entrust us with your IT management services, or let us collaborate with your IT experts.",
    icon: Settings,
  },
  {
    title: "Infrastructure",
    desc: "We ensures that your IT infrastructure is constantly optimized to deliver the dependable and highly accessible services that businesses require.",
    icon: HardDrive,
  },
  {
    title: "Applications",
    desc: "By supporting software and on-premise installations, We Provide Solutions ensures that programs are always optimized.",
    icon: Layout,
  }
];

const ITServicePage = () => {
  return (
    <>
    <InnerHeader 
                title="Digital Marketing Solutions" 
                subtitle="Boost your online visibility and reach more customers with our effective digital marketing services." 
            />
    
    <div className="w-full font-sans antialiased text-black overflow-x-hidden bg-white">
      {/* SECTION 1: WHY CHOOSE US (White Background) */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column */}
          <div>
            <div className="w-12 h-1 bg-red-600 mb-6" />
            <h1 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight uppercase tracking-tighter">
              Stay Ahead of <br /> Problems
            </h1>
            <div className="space-y-6 text-zinc-600 max-w-lg leading-relaxed font-medium">
              <p>
                Would you like months without any connectivity issues? No tangled cables, no network downtime, and no worries about messy wiring? Imagine feeling confident, knowing your cabling and wiring are perfectly organized and functioning.
              </p>
              <p>
                That's what you get with PCHelperTeam. We provide expert cabling, wiring, and dressing services to ensure your business stays connected and organized.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            <h2 className="text-4xl font-black text-black uppercase tracking-tight">Why Choose Us?</h2>
            
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border-2 border-red-600 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <Settings size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black uppercase tracking-wide">Expert IT Help</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  With PCHelperTeam, you get quick access to expert IT support for all your cabling and wiring needs. Our skilled professionals ensure your systems are set up correctly and efficiently.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border-2 border-red-600 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <Headset size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black uppercase tracking-wide">Reliable Support Anytime</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Our trained IT professionals are available 24/7, every day of the year. Just give us a call, and we'll make sure your cabling and wiring are maintained for optimum performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gray Tone Center Image */}
        <div className="max-w-7xl mx-auto mt-20 relative h-[300px] md:h-[500px] w-full overflow-hidden bg-zinc-100 border-y border-zinc-200">
            <img 
              src="/service/steptodown.jpg" 
              alt="IT Infrastructure" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
        </div>
      </section>

      {/* SECTION 2: SOLUTIONS (Gray Background) */}
      <section className="bg-zinc-100 py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div className="relative">
              <div className="w-12 h-1 bg-red-600 mb-4" />
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">Solutions</h2>
            </div>
            <Link href="/contact" className="bg-black hover:bg-red-600 text-white px-10 py-4 font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] active:shadow-none active:translate-x-1 active:translate-y-1">
              Get Started
            </Link>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {SERVICE_DATA.map((item) => {
                const IconComponent = item.icon;

                return (
                  <Link 
                    key={item.title} 
                    href="#"
                    className="block group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="relative h-full bg-white p-12 flex flex-col items-center text-center border border-zinc-200 hover:border-red-600 transition-all duration-500 shadow-sm hover:shadow-2xl"
                    >
                      {/* Corner Brackets */}
                      <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-red-600" />
                      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-red-600 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-red-600/10" />

                      {/* Icon */}
                      <div className="mb-8 text-red-600 group-hover:scale-110 transition-transform duration-500">
                        <IconComponent size={48} strokeWidth={1.5} />
                      </div>

                      <h3 className="text-xl font-black text-black mb-4 leading-tight uppercase tracking-widest group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-zinc-500 font-medium leading-relaxed text-sm group-hover:text-black transition-colors">
                        {item.desc}
                      </p>
                    </motion.div>
                  </Link>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ITServicePage;