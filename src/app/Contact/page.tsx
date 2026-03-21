import { MapPin, Phone, Mail } from 'lucide-react';

import InnerHeader from '@/components/InnerHeader'

const contactData = [
  {
    title: "PCHelperTeam.",
    icon: <MapPin className="w-8 h-8 text-white" />,
    gradient: "from-red-600 to-indigo-600",
    content: (
      <p className="text-gray-500 text-sm leading-relaxed">
        Saife Mansion, 1st Floor,
        Bibi Titi Mohammed Street,
        P.O.Box 8523,
        Dar Es Salaam, Tanzania,
        Postal Code:11104
      </p>
    ),
  },
  {
    title: "Contact Info",
    icon: <Phone className="w-8 h-8 text-white" />,
    gradient: "from-green-400 to-emerald-500",
    content: (
      <div className="text-gray-500 text-sm space-y-1">
        <p>Land line - +(255) 786 277 777</p>
        <p>Mobile - +(255) 786 277 777</p>
        <p>Whatsapp - +(255) 786 277 777</p>
      </div>
    ),
  },
  {
    title: "Email",
    icon: <Mail className="w-8 h-8 text-white" />,
    gradient: "from-purple-400 to-pink-500",
    content: (
      <div className="text-sm">
        <a href="mailto:info@vgmgroup.co.tz" className="text-red-600 font-medium hover:underline">
          info@vgmgroup.co.tz
        </a>
        <p className="text-gray-500 mt-1">
          Skype ID: <span className="font-bold text-gray-700">VGMGROUP</span>
        </p>
      </div>
    ),
  },
];

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <InnerHeader
        title="Get in Touch with PCHelperTeam."
        subtitle="Serving clients worldwide — reach out to us anytime with your ideas."
      />

      <section>
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                {/* Icon Container with Shadow and Gradient */}
                <div className={`mb-8 p-5 rounded-full bg-linear-to-br ${item.gradient} shadow-xl shadow-indigo-100`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>

                {/* Content */}
                <div className="grow">
                  {item.content}
                </div>
              </div>
            ))}
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

export default ContactPage;