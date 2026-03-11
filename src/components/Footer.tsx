import ContactSection from '@/components/home/ContactSection'
import Link from 'next/link';

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {


  const sections = [
    {
      title: "Our Portals",
      links: ["Exporters India", "Placement India", "RealEstate India", "TourTravel World", "Matrimonials India", "IndianYellow Pages"]
    },
    {
      title: "Services",
      links: ["Web Designing", "Web Development", "Mobile App Development", "Digital Marketing", "WhatsApp Business Solutions", "Promotional Video Services"]
    },
    {
      title: "Products",
      links: ["School ERP Solutions", "CRM Solutions", "E-Commerce Solutions"]
    }
  ];

  const industries = [
    { left: ["Real Estate", "Jobs & Recruiters", "Matrimonial", "B2B/B2C"], right: ["E-Commerce", "School & Education", "Travel", "Health Care"] }
  ];

  const bottomLinks = ["Home", "About Us", "Blog", "Career", "Contact Us", "Press Release", "Terms & Conditions", "Privacy Policy", "Online Payment"];


  const socials = [
    { icon: Facebook, href: "#", label: "FB" },
    { icon: Twitter, href: "#", label: "TW" },
    { icon: Instagram, href: "#", label: "IG" },
    { icon: Linkedin, href: "#", label: "LI" },
  ];


  return (
    <>
      <ContactSection />
      <footer className="bg-[#050505] text-white pt-16 pb-8 px-6 font-sans border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12">

            {/* Brand/About Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center font-bold text-xl">V</div>
                <span className="text-xl font-bold tracking-tight">VGM Group</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Leading the industry with innovative solutions and world-class expertise since 2010.
              </p>
              {/* Social Icons */}

              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={24} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Dynamic Sections */}
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-100 mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="group text-zinc-400 hover:text-red-500 text-sm transition-colors duration-200 flex items-center">
                        <span className="w-0 group-hover:w-2 h-[1px] bg-red-500 mr-0 group-hover:mr-2 transition-all"></span>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Industries (Two Column Layout) */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-100 mb-6">
                Industries
              </h3>
              <div className="grid gap-x-4 gap-y-4">
                {[...industries[0].left, ...industries[0].right].map((item) => (
                  <Link key={item} href="#" className="text-zinc-400 hover:text-red-500 text-sm transition-colors">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter / Quick Links Bar */}
          <div className="py-8 border-t border-zinc-900 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {bottomLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-xs text-zinc-500 hover:text-zinc-200 transition"
                >
                  {link}
                </Link>
              ))}
            </div>
            
          </div>

          {/* Bottom Credits */}
          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            <p>© 2026 VGM Group Limited. All Rights Reserved.</p>
            <p>Designed with precision.</p>
          </div>
        </div>
      </footer>
    </>

  );
};
export default Footer;