import React from 'react';
import { LayoutTemplate, Smartphone, MessageSquareMore, Image, CodeXml,FileText,ShoppingCart,UserCog,ShieldCheck } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

// const SERVICES_DATA = [
//     { title: "Core Design", description: "Professional homepage and inner page designs.", icon: LayoutTemplate },
//     { title: "Responsiveness", description: "Mobile-friendly layouts that adjust to all screen sizes.", icon: Smartphone },
//     { title: "Interactivity", description: "Inclusion of contact forms and basic interactive features.", icon: MessageSquareMore },
//     { title: "Visuals", description: "Custom image galleries and professional banner designs.", icon: Image },
//     { title: "Development", description: "Clean coding practices to ensure a smooth user experience.", icon: CodeXml },
//     { title: "Content", description: "Standard website pages (About, Services, Contact, etc.).", icon: FileText },
//     { title: "E-commerce", description: "Specialized product page designs (available if required).", icon: ShoppingCart },
//     { title: "Support", description: "Simple training sessions for handling independent website updates.", icon: UserCog },
//     { title: "Security", description: "Security basics, including SSL setup for safe browsing.", icon: ShieldCheck },    
// ];

const SERVICES_DATA = [
  { title: "Design Foundation", description: "Well-structured homepage and inner page layouts with a professional look.", icon: LayoutTemplate },
  { title: "Adaptive Layouts", description: "Responsive designs that work smoothly across all devices and screen sizes.", icon: Smartphone },
  { title: "User Interaction", description: "Integration of contact forms and essential interactive elements for engagement.", icon: MessageSquareMore },
  { title: "Visual Elements", description: "Customized image galleries and high-quality banner visuals.", icon: Image },
  { title: "Web Development", description: "Efficient and clean coding to deliver seamless performance.", icon: CodeXml },
  { title: "Page Content", description: "Essential pages like About, Services, and Contact included.", icon: FileText },
  { title: "Online Store Design", description: "Dedicated product page layouts for eCommerce needs (optional).", icon: ShoppingCart },
  { title: "User Training", description: "Basic guidance to help you manage and update your website easily.", icon: UserCog },
  { title: "Website Security", description: "Fundamental security measures including SSL for safe user access.", icon: ShieldCheck },    
];

const ToolsTechnologies = () => {
    return (
        <section className="py-20 px-6 bg-slate-50/50">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
  What <span className="text-red-500"> We Deliver </span> to You
</h2>
<p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
  By choosing our web design services, you receive:
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