import React from 'react';
import { 
  Paintbrush, Smartphone, MousePointerClick, Layout, 
  Zap, Settings, Globe, LifeBuoy 
} from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

const SERVICES_DATA = [
  { title: "Custom Website Development", description: "Every design is made as per your business needs, not copied from templates.", icon: Paintbrush },
  { title: "Mobile-Friendly Layouts", description: "Websites that open properly on mobiles, tablets, and desktops.", icon: Smartphone },
  { title: "Easy to Navigate", description: "Simple structure so that visitors can easily find what they are looking for.", icon: MousePointerClick },
  { title: "Clear and Neat Look", description: "Clean layouts, readable fonts, and balanced colors.", icon: Layout },
  { title: "Fast Loading Pages", description: "Optimized performance to ensure your pages load instantly for users.", icon: Zap },
  { title: "Simple Maintenance", description: "Development that can be easily updated whenever needed.", icon: Settings },
  { title: "Cross-Browser Support", description: "Website works properly on all browsers like Chrome, Firefox, Safari, etc.", icon: Globe },
  { title: "Long-Term Support", description: "We provide updates and help even after your website goes live.", icon: LifeBuoy },
];

const WhyChoose = () => {
  return (
    <section className="py-20 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Our <span className="text-red-500">Promotional Video Services</span> Services?
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            We believe a good website is not just about looks, it’s about experience. 
            Here is what we provide:
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