import React from 'react';

type ProcessStepProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ title, description, icon, index }) => {
  return (
    /* Change: Removed flex-1 to prevent grid squashing. 
       Added w-full and responsive margins.
    */
    <div className="w-full md:flex-1 text-center relative z-10 flex flex-col items-center px-2">
      
      {/* Icon Circle - Kept original desktop sizes */}
      <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg border-4 border-white shrink-0">
        {icon}
      </div>
      
      {/* Text Content */}
      <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 px-1">
        {index + 1}. {title}
      </h3>
      
      {/* On mobile, very long descriptions can look messy in 2 columns. 
         'line-clamp-3' is a good safety measure if you have the Tailwind Typography plugin, 
         otherwise, standard text-sm works great.
      */}
      <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-[150px] md:max-w-none">
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;