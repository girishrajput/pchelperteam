import React from 'react';
import { 
  ClipboardCheck, Layout as LayoutIcon, Palette, 
  Code2, SearchCheck, Rocket, Headset 
} from 'lucide-react';
import ProcessStep from '@/components/ProcessStep'; // Adjust the import path as needed

const steps = [
  { title: "Requirement", description: "Understanding your business goals.", icon: <ClipboardCheck className="w-6 h-6" /> },
  { title: "Planning", description: "Mapping out the site structure.", icon: <LayoutIcon className="w-6 h-6" /> },
  { title: "Development", description: "Creating the visual brand identity.", icon: <Palette className="w-6 h-6" /> },
  { title: "Development", description: "Building with clean, scalable code.", icon: <Code2 className="w-6 h-6" /> },
  { title: "Testing", description: "Ensuring a bug-free experience.", icon: <SearchCheck className="w-6 h-6" /> },
  { title: "Launch", description: "Making your website live.", icon: <Rocket className="w-6 h-6" /> },
  { title: "Support", description: "Ongoing updates and help.", icon: <Headset className="w-6 h-6" /> },
];

export default function OurProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center text-slate-900">
          Our<span className="text-red-500"> WhatsApp Business Solution</span> Process
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
          {/* The Progress Line (Only visible on desktop) */}
          <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-slate-200 z-0" />

          {steps.map((step, i) => (
            <ProcessStep 
              key={i}
              index={i}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}