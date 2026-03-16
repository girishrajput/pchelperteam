import React from 'react';
import { LayoutTemplate, Smartphone, MessageSquareMore, Image, CodeXml,FileText,ShoppingCart,UserCog,ShieldCheck } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

const SERVICES_DATA = [
    { title: "Core Design", description: "Professional homepage and inner page Development.", icon: LayoutTemplate },
    { title: "Responsiveness", description: "Mobile-friendly layouts that adjust to all screen sizes.", icon: Smartphone },
    { title: "Interactivity", description: "Inclusion of contact forms and basic interactive features.", icon: MessageSquareMore },
    { title: "Visuals", description: "Custom image galleries and professional banner Development.", icon: Image },
    { title: "Development", description: "Clean coding practices to ensure a smooth user experience.", icon: CodeXml },
    { title: "Content", description: "Standard website pages (About, Services, Contact, etc.).", icon: FileText },
    { title: "E-commerce", description: "Specialized product page Development (available if required).", icon: ShoppingCart },
    { title: "Support", description: "Simple training sessions for handling independent website updates.", icon: UserCog },
    { title: "Security", description: "Security basics, including SSL setup for safe browsing.", icon: ShieldCheck },    
];

const ToolsTechnologies = () => {
    return (
        <section className="py-20 px-6 bg-slate-50/50">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                      What <span className="text-red-500"> You Get </span> From Us
                    </h2>
                    <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
                        When you take our WhatsApp Business Solution services, you get:
                    </p>
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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