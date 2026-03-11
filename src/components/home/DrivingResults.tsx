import React from 'react';

const features = [
  { title: "Quality Driven Approach", icon: "🏆", hoverIcon: "🥇", color: "group-hover:bg-yellow-100" },
  { title: "Transparent Work Culture", icon: "🤝", hoverIcon: "💎", color: "group-hover:bg-blue-100" },
  { title: "High Standards For Customer Service", icon: "📞", hoverIcon: "🎧", color: "group-hover:bg-green-100" },
  { title: "Passion For Perfection", icon: "✨", hoverIcon: "🚀", color: "group-hover:bg-purple-100" },
  { title: "Innovative Thinking", icon: "💡", hoverIcon: "🔥", color: "group-hover:bg-orange-100" },
  { title: "Problem Solving Skills", icon: "🧩", hoverIcon: "⚙️", color: "group-hover:bg-indigo-100" },
  { title: "Commitment to Timely Delivery", icon: "⏱️", hoverIcon: "⚡", color: "group-hover:bg-red-100" },
  { title: "Focus on Long Term Relationships", icon: "❤️", hoverIcon: "♾️", color: "group-hover:bg-pink-100" },
];

export default function ResultsSection() {
  return (
    <section className="bg-slate-200 py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          Driving Results That Matter
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12">
          Turning ideas into meaningful achievements through our core values.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              // Added suppressHydrationWarning to handle extension attributes like bis_skin_checked
              suppressHydrationWarning={true}
              className="group relative bg-white p-10 rounded-2xl shadow-sm border border-slate-100 
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer 
                         flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Animated Icon Container */}
              <div 
                suppressHydrationWarning={true}
                className={`w-20 h-20 mb-6 rounded-full bg-slate-50 flex items-center justify-center 
                            transition-all duration-500 transform group-hover:rotate-12 ${item.color}`}
              >
                
                {/* Initial Icon */}
                <span className="text-4xl transition-all duration-300 group-hover:hidden">
                  {item.icon}
                </span>

                {/* Hover Icon */}
                <span className="text-4xl hidden group-hover:block animate-bounce">
                  {item.hoverIcon}
                </span>
              </div>

              <h3 className="text-slate-700 font-bold text-sm uppercase tracking-wide group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              
              {/* Bottom decorative bar */}
              <div 
                suppressHydrationWarning={true}
                className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-red-500 transition-all duration-500" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}