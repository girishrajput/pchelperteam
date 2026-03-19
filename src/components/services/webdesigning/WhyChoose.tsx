import React from 'react';
import {
  Paintbrush, Smartphone, MousePointerClick, Layout,
  Zap, Settings, Globe, LifeBuoy
} from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

// const SERVICES_DATA = [
//   { title: "Custom Website Designs", description: "Every design is made as per your business needs, not copied from templates.", icon: Paintbrush },
//   { title: "Mobile-Friendly Layouts", description: "Websites that open properly on mobiles, tablets, and desktops.", icon: Smartphone },
//   { title: "Easy to Navigate", description: "Simple structure so that visitors can easily find what they are looking for.", icon: MousePointerClick },
//   { title: "Clear and Neat Look", description: "Clean layouts, readable fonts, and balanced colors.", icon: Layout },
//   { title: "Fast Loading Pages", description: "Optimized performance to ensure your pages load instantly for users.", icon: Zap },
//   { title: "Simple Maintenance", description: "Designs that can be easily updated whenever needed.", icon: Settings },
//   { title: "Cross-Browser Support", description: "Website works properly on all browsers like Chrome, Firefox, Safari, etc.", icon: Globe },
//   { title: "Long-Term Support", description: "We provide updates and help even after your website goes live.", icon: LifeBuoy },
// ];

const SERVICES_DATA = [
  { title: "Tailored Website Designs", description: "Each design is crafted specifically for your business, not reused from templates.", icon: Paintbrush },
  { title: "Responsive Across Devices", description: "Websites that function smoothly on mobile phones, tablets, and desktops.", icon: Smartphone },
  { title: "User-Friendly Navigation", description: "Well-structured layouts so visitors can easily explore your website.", icon: MousePointerClick },
  { title: "Clean and Professional Design", description: "Minimal layouts with clear typography and balanced color schemes.", icon: Layout },
  { title: "High-Speed Performance", description: "Optimized websites to ensure fast loading times for a better user experience.", icon: Zap },
  { title: "Easy Content Updates", description: "Websites designed for quick and hassle-free updates whenever required.", icon: Settings },
  { title: "Browser Compatibility", description: "Fully functional across all major browsers like Chrome, Firefox, and Safari.", icon: Globe },
  { title: "Ongoing Assistance", description: "Continuous support and updates even after your website is launched.", icon: LifeBuoy },
];

const WhyChoose = () => {
  return (
    <section className="py-20 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Pick Our <span className="text-red-500">Website Design</span> Services?
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            We focus on more than just design — we create smooth user experiences.
            Here’s what you can expect from us:
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;