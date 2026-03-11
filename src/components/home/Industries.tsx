'use client';
import React from 'react';
import { 
  Home, 
  Briefcase, 
  Heart, 
  Globe, 
  ShoppingCart, 
  GraduationCap, 
  Plane, 
  PlusCircle,
  ArrowRight 
} from 'lucide-react';

const industries = [
  { name: "Real Estate", icon: Home },
  { name: "Jobs & Recruiters", icon: Briefcase },
  { name: "Matrimonial", icon: Heart },
  { name: "B2B/B2C", icon: Globe },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "School & Education", icon: GraduationCap },
  { name: "Travel", icon: Plane },
  { name: "Health Care", icon: PlusCircle },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl lg:text-3xl font-bold text-slate-800 leading-tight mb-6">
            Empowering Industries Through Technology, Innovation, and Expertise
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-10">
            Our expertise spans multiple sectors, providing smart solutions that drive growth and efficiency. 
            From startups to established businesses, we make an impact everywhere.
          </p>
          <button className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-lg shadow-teal-100">
            Get a Quote 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side: Interactive Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center p-6 border-[1.5px] border-blue-200 rounded-2xl aspect-square transition-all duration-300 hover:bg-red-600 hover:border-red-600 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-blue-200"
            >
              {/* Icon - Changes from Blue to White on Hover */}
              <item.icon className="w-10 h-10 mb-4 text-red-500 transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
              
              <span className="text-center text-sm font-semibold text-slate-600 transition-colors duration-300 group-hover:text-white">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}