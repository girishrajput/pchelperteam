import React from 'react';
import { Paintbrush, Smartphone, MousePointerClick, Layout, LifeBuoy } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

const SERVICES_DATA = [
    { title: "Custom UI/UX Design", description: "Focus: Custom Website Development, Clear and Neat Look Purpose: Creating unique, template-free layouts with readable fonts and balanced colors tailored to your business needs.", icon: Paintbrush },
    { title: "Responsive Development", description: "Focus: Mobile-Friendly Layouts, Cross-Browser Support Purpose: Ensuring websites open properly on mobiles, tablets, and desktops while working flawlessly on Chrome, Firefox, and Safari.", icon: Smartphone },
    { title: "Navigation & User Experience", description: "Focus: Easy to Navigate, Simple Structure Purpose: Development an intuitive user flow so that visitors can easily find exactly what they are looking for without confusion.", icon: MousePointerClick },
    { title: "Performance & Speed", description: "Clean layouts, readable fonts, and balanced colors.", icon: Layout },
    { title: "Maintenance & Support", description: "Focus: Simple Maintenance, Long-Term Support Purpose: Providing a design that is easy to update and offering continuous help even after your website goes live.", icon: LifeBuoy },    
];

const ToolsTechnologies = () => {
    return (
        <section className="py-20 px-6 bg-slate-50/50">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Tools and Technologies<span className="text-red-500"> We Use </span>
                    </h2>
                    <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
                        We follow a simple step-by-step process to make sure your website is built smoothly
                    </p>
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default ToolsTechnologies;