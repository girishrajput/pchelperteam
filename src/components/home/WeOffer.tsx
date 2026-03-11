"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import {
  Palette,
  Code2,
  Smartphone,
  Video,
  Megaphone,
  MessageSquare
} from 'lucide-react';

const DATA = {
  Portals: [
    { title: "ExportersIndia", desc: "A trusted B2B marketplace connecting manufacturers and suppliers.", color: "from-red-500 to-indigo-600", icon: "E" },
    { title: "MatrimonialsIndia", desc: "Exclusive matchmaking platform for finding perfect life partners.", color: "from-rose-400 to-pink-600", icon: "M" },
    { title: "PlacementIndia", desc: "Smart job portal bridging recruiters and job seekers seamlessly.", color: "from-emerald-400 to-teal-600", icon: "P" },
    { title: "RealestateIndia", desc: "India's leading property portal for residential & commercial needs.", color: "from-orange-400 to-red-500", icon: "R" },
    { title: "IndianYellowPages", desc: "Comprehensive business directory with verified company listings.", color: "from-amber-400 to-yellow-600", icon: "Y" },
    { title: "TourTravelWorld", desc: "Global travel portal providing tourism info and travel leads.", color: "from-sky-400 to-red-500", icon: "T" },
  ],
  Services: [
    {
      title: "Web Designing",
      desc: "We create attractive, easy-to-use websites Designing that engage visitors and make your brand memorable.",
      color: "from-red-500 to-indigo-600",
      icon: Palette,
    },
    {
      title: "Web Development",
      desc: "We build strong, fast, and reliable websites developement to meet your business goals and user needs.",
      color: "from-red-500 to-indigo-600",
      icon: Code2,
    },
    {
      title: "Mobile App Development",
      desc: "We design intuitive and useful mobile apps that help increase engagement and grow your business worldwide.",
      color: "from-red-500 to-indigo-600",
      icon: Smartphone,
    },
    {
      title: "Promotional Video Services",
      desc: "We design impactful promotional videos that explain your services clearly and help you reach more people.",
      color: "from-red-500 to-indigo-600",
      icon: Video,
    },
    {
      title: "Digital Marketing",
      desc: "We use effective online marketing strategies to bring more visitors, increase engagement, and grow your business.",
      color: "from-red-500 to-indigo-600",
      icon: Megaphone,
    },
    {
      title: "WhatsApp Business Solutions",
      desc: "Streamlining customer communication with automated, personalized WhatsApp solutions to enhance engagement and satisfaction.",
      color: "from-red-500 to-indigo-600",
      icon: MessageSquare,
    }
  ],
  Products: [
    {
      title: "Promotional Video Services",
      desc: "We design impactful promotional videos that explain your services clearly and help you reach more people.",
      color: "from-red-500 to-indigo-600",
      icon: Video,
    },
    {
      title: "Digital Marketing",
      desc: "We use effective online marketing strategies to bring more visitors, increase engagement, and grow your business.",
      color: "from-red-500 to-indigo-600",
      icon: Megaphone,
    },
    {
      title: "WhatsApp Business Solutions",
      desc: "Streamlining customer communication with automated, personalized WhatsApp solutions to enhance engagement and satisfaction.",
      color: "from-red-500 to-indigo-600",
      icon: MessageSquare,
    }
  ],
};

export default function CreativeTabs() {
  const [activeTab, setActiveTab] = useState('Portals');
  const tabs = Object.keys(DATA);

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 mx-auto text-center">
          What We Offer!
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-center">
          We deliver smart, efficient, and dependable solutions that enhance your business performance, strengthen client relationships, and unlock growth, innovation, and opportunities across every digital platform.
        </p>

        {/* Creative Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/80 backdrop-blur-md p-1.5 rounded-2xl shadow-xl shadow-blue-100 border border-white">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${activeTab === tab ? 'text-white' : 'text-slate-500 hover:text-slate-800'
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-red-600 rounded-xl shadow-lg shadow-blue-200"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Animated Content Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {DATA[activeTab as keyof typeof DATA].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative background element */}
                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-linear-to-br ${item.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700`} />

                {/* Icon Circle */}
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center text-white text-2xl font-black mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                  {typeof item.icon === 'string' ? item.icon : <item.icon size={24} />}
                </div>

                <h3 className="text-xl font-extrabold text-slate-800 mb-3 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.desc}
                </p>

                {/* Creative "Explore" link that appears on hover */}
                <div className="mt-6 flex items-center text-red-600 font-bold text-xs uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">
                  Explore Now <span className="ml-2">→</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {DATA[activeTab as keyof typeof DATA].length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-slate-400 italic"
          >
            Coming soon to {activeTab}...
          </motion.div>
        )}
      </div>
    </div>
  );
}