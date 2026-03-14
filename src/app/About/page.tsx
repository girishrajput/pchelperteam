import React from 'react';
import { Eye, Target, Lightbulb, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import Image from "next/image";
import InnerHeader from '@/components/InnerHeader'

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}

      <InnerHeader
        title="About VGM Group limited.   – Excellence Beyond Boundaries"
        subtitle="Trusted offshore development partner delivering AI, web, and mobile solutions globally."
      />

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-red-800 mb-4 border-l-4 border-red-600 pl-4">Who We Are & What We Do</h2>
            <p className="leading-relaxed mb-4">
              Since 1997, VGM Group limited.   has emerged as a trusted partner for businesses looking to grow and succeed. We help organizations harness the power of technology, transforming ideas into practical solutions.
            </p>
            <p>Our journey is defined by innovation, reliability, and client success.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-800 mb-4 border-l-4 border-red-600 pl-4">Our Philosophy</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="h-2 w-2 bg-red-600 rounded-full mt-2 shrink-0" />
                <p><strong>People-Centric:</strong> Every product is designed with users in mind.</p>
              </li>
              <li className="flex gap-3">
                <span className="h-2 w-2 bg-red-600 rounded-full mt-2 shrink-0" />
                <p><strong>Innovation:</strong> We embrace emerging trends to keep clients ahead.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Certification Image */}
        <div className="lg:col-span-5 flex justify-center items-start">
          <div className="shadow-2xl rounded-lg overflow-hidden border border-gray-100 hover:scale-105 transition-transform duration-300">
            <Image src="/about/certificate.png" alt="ISO 9001:2015 Certified" width={400} height={300} />
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition">
            <div className="bg-red-100 p-4 rounded-full text-red-600">
              <Eye size={40} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Vision</h3>
              <p className="text-gray-600">To cultivate par-excellence services with a customer-centric approach, earning the trust of clients worldwide.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition">
            <div className="bg-red-100 p-4 rounded-full text-red-600">
              <Target size={40} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Mission</h3>
              <p className="text-gray-600">To achieve harmonious alignment between our capabilities and client requirements through transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="hidden lg:block">
          {/* Using a placeholder for your illustration */}
          <img src="/about/core-values.png" alt="Core Values Illustration" className="w-full h-auto" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-red-900 mb-8">Our Core Values</h2>
          <div className="space-y-8">
            <ValueItem icon={<Users />} title="Transpicuous Work Culture" text="Integrity is our cornerstone. We uphold transparency ethically and socially." />
            <ValueItem icon={<TrendingUp />} title="Result Orientation" text="Clear goals and vigilant project monitoring define our approach." />
            <ValueItem icon={<Lightbulb />} title="Innovation" text="Out-of-the-box thinking unlocks hidden possibilities." />
            <ValueItem icon={<ShieldCheck />} title="Quality-Driven" text="We forge enduring relationships by delivering nothing but the best." />
          </div>
        </div>
      </section>
    </>
  );
};

// Helper component for core values
const ValueItem = ({ icon, title, text }: { icon: any, title: string, text: string }) => (
  <div className="flex gap-4 group">
    <div className="bg-gray-100 text-red-600 p-3 rounded-lg group-hover:bg-red-600 group-hover:text-white transition">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-gray-600 leading-snug">{text}</p>
    </div>
  </div>

);

export default AboutPage;