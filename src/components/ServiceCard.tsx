import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

export const ServiceCard = ({ title, description, Icon, index }: ServiceCardProps) => {
  return (
    <div className="group relative p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ease-out overflow-hidden">
      {/* Decorative Gradient Background (Hidden by default, fades in on hover) */}
      <div className="absolute inset-0 from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Floating Icon Container */}
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
          <Icon size={28} strokeWidth={1.5} />
        </div>
        
        {/* Number Badge (Subtle background detail) */}
        <span className="absolute top-0 right-0 text-6xl font-black text-slate-50 group-hover:text-blue-50/50 transition-colors duration-500 -z-10 select-none">
          0{index + 1}
        </span>

        <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-600">
          {description}
        </p>
        
        {/* Interactive Bottom Line */}
        <div className="mt-6 w-8 h-1 bg-slate-200 rounded-full group-hover:w-full group-hover:bg-blue-500 transition-all duration-500" />
      </div>
    </div>
  );
};