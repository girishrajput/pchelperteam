import React from 'react';
import { Star, ShieldCheck, Zap, Globe, Award, Quote, ChevronRight } from 'lucide-react';

export default function RedCreativePCHelper() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] text-zinc-900 font-sans selection:bg-red-100 selection:text-red-600">

      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* --- DYNAMIC HERO TITLE --- */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Live Tech Support Ready
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-950 leading-[0.85] uppercase">
            Fast. Reliable.<br /> 
            <span className="text-red-600">Redefined.</span>
          </h1>
        </div>

        {/* --- RED BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-24">
          
          {/* Main Hero Stat */}
          <div className="md:col-span-3 bg-red-600 p-10 rounded-[2.5rem] text-white flex flex-col justify-between min-h-[300px] shadow-2xl shadow-red-200 relative overflow-hidden group">
            <Zap size={120} className="absolute -right-8 -top-8 text-red-500 opacity-50 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
            <div className="relative z-10">
              <p className="text-red-100 font-black uppercase tracking-widest text-xs mb-2">Response Speed</p>
              <h2 className="text-8xl font-black italic leading-none">5 MIN</h2>
            </div>
            <p className="relative z-10 text-red-500 bg-white inline-block self-start px-4 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
              Average Resolution Time
            </p>
          </div>
          
          {/* Secondary Stats */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-200 shadow-sm flex flex-col justify-between group hover:border-red-600 transition-colors">
              <Globe className="text-red-600 group-hover:rotate-12 transition-transform" size={32} />
              <div>
                <h2 className="text-4xl font-black text-zinc-950">10k+</h2>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Global Solves</p>
              </div>
            </div>

            <div className="bg-zinc-950 p-8 rounded-[2.5rem] text-white flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-3xl" />
              <Award className="text-red-600" size={32} />
              <div>
                <h2 className="text-4xl font-black italic">25+ YRS</h2>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Elite Mastery</p>
              </div>
            </div>

            <div className="sm:col-span-2 bg-white p-6 rounded-[2rem] border border-zinc-200 flex items-center justify-between group cursor-pointer hover:bg-zinc-900 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <Star className="text-red-600 group-hover:text-white" fill="currentColor" size={20} />
                </div>
                <div>
                  <h4 className="font-black text-zinc-950 group-hover:text-white leading-none">5-Star Excellence</h4>
                  <p className="text-zinc-500 group-hover:text-zinc-400 text-xs mt-1">Across Google & Yelp platforms</p>
                </div>
              </div>
              <ChevronRight className="text-zinc-300 group-hover:text-red-600 transition-all group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* --- REVIEW CARDS SECTION --- */}
        <div className="grid lg:grid-cols-3 gap-6">
          <ReviewCardRed 
            name="Ava Lorenn"
            platform="Google"
            text="My PC stopped working, and they were able to fit me in the same day! The price was fair and the service was beyond what I expected."
          />
          <ReviewCardRed 
            name="Steven S."
            platform="Yelp"
            text="Knowledgeable and helpful. He ran a full test on my PC and it was great. I highly recommend them for your technical needs."
            isDark
          />
          <ReviewCardRed 
            name="C. Lynn M."
            platform="Yelp"
            text="He quickly resolved my Outlook connectivity issues after I spent hours on calls with others. Made the right call."
          />
        </div>
      </section>
    </div>
  );
}

function ReviewCardRed({ name, text, platform, isDark = false }: { name: string, text: string, platform: string, isDark?: boolean }) {
  return (
    <div className={`p-8 rounded-[2.5rem] transition-all hover:-translate-y-2 duration-300 border shadow-sm ${
      isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
    }`}>
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white">
            {name[0]}
          </div>
          <div>
            <h4 className={`font-black tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>{name}</h4>
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{platform} Review</span>
          </div>
        </div>
        <Quote size={20} className={isDark ? 'text-zinc-800' : 'text-zinc-100'} />
      </div>
      
      <div className="flex text-red-600 gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
      </div>

      <p className={`text-sm leading-relaxed font-medium mb-6 ${isDark ? 'text-zinc-400 italic' : 'text-zinc-600'}`}>
        &quot;{text}&quot;
      </p>

      <div className={`pt-6 border-t ${isDark ? 'border-zinc-800' : 'border-zinc-100'} flex items-center gap-2`}>
        <ShieldCheck size={14} className="text-red-600" />
        <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
          Verified Case Solved
        </span>
      </div>
    </div>
  );
}