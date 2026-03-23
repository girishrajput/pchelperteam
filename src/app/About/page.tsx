import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import InnerHeader from '@/components/InnerHeader';

const AboutPage = () => {
  const locations = [
    "Southern Malibu", "Bel Air", "Pacific Palisades", "Santa Monica", "Encino",
    "West Los Angeles", "Beverly Hills", "West Hollywood", "Downtown LA",
    "Culver City", "Mar Vista", "Palms", "Cheviot Hills", "Beverly Glen", "Venice", "Marina Del Rey"
  ];

  return (
    <>
      <InnerHeader
        title="About Us"
        subtitle=""
      />

      <section className="bg-slate-50 py-16 px-6 md:px-12 lg:px-24 font-sans text-slate-800">
        <div className="max-w-7xl mx-auto">

          {/* --- Hero / Intro Section --- */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-red-600 font-bold tracking-wide uppercase text-sm">About PCHelperTeam</h2>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Your One-Stop Shop for <span className="text-red-600">Total Tech Support.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are a team of experienced and friendly IT professionals dedicated to customizing
                technology to fit your wishes. We handle the hassle and clutter so you can enjoy life.
              </p>

              <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg">
                Get Support Now
              </Link>
            </div>

            <div className="relative h-[350px] w-full overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-slate-900/10 z-10" />
              <Image
                src="/about/about.png"
                alt="About"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* --- Service Areas & Trust Section --- */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            <div className="grid lg:grid-cols-3 gap-12">

              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold mb-4">Where We Operate</h3>
                <p className="text-slate-500 mb-6">
                  Providing expert technical support and equipment to small businesses and residences across West Los Angeles.
                </p>
                <div className="flex items-center gap-2 text-red-600 font-medium text-sm">
                  <span>10+ Years of Excellence</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span>Certified Pros</span>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {locations.map((city) => (
                    <div key={city} className="flex items-center space-x-2 text-slate-600 hover:text-red-600 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-red-500" />
                      <span className="text-sm">{city}</span>
                    </div>
                  ))}
                  <div className="text-sm italic text-slate-400">...and surrounding areas</div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 italic max-w-2xl mx-auto">
              &ldquo;We strive for your full happiness and we try to go beyond what you expect. It is a promise.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;