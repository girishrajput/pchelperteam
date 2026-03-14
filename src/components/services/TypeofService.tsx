import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "Ecommerce Web Design",
    description:
      "We create professional eCommerce websites that make online selling easier. With user-friendly layouts, clear product displays, and secure checkout options, your customers can shop with confidence.",
    image: "/images/service/ecommerce-web-design.jpg",
  },
  {
    title: "Custom Web Design",
    description:
      "Our custom web design services deliver unique websites created from scratch to reflect your brand’s identity and vision.",
    image: "/images/service/custom-web-design.jpg",
  },
  {
    title: "UI/UX Web Design",
    description:
      "We create visually engaging and user-friendly interfaces that enhance user experience.",
    image: "/images/service/ui-ux-web-design.jpg",
  },
  {
    title: "Responsive Web Design",
    description:
      "Our responsive web design ensures your website works perfectly across all devices.",
    image: "/images/service/responsive-web-design.jpg",
  },
  {
    title: "Business Website Design",
    description:
      "Professional business websites designed to build trust and showcase your services effectively.",
    image: "/images/service/business-web-design.jpg",
  },
  {
    title: "Landing Page Design",
    description:
      "High-converting landing pages designed to capture leads and drive more conversions.",
    image: "/images/service/landing-page-design.jpg",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Types of <span className="text-red-600">Web Designing Services</span> We Provide
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto italic">
            Explore a range of web design solutions tailored to meet every business need.
          </p>
        </div>

        {/* Services */}
        <div className="divide-y divide-slate-200">
          {SERVICE_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}