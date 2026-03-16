import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "Ecommerce WhatsApp Business Solution",
    description:
      "We create professional eCommerce websites that make online selling easier. With user-friendly layouts, clear product displays, and secure checkout options, your customers can shop with confidence. Our eCommerce Development are responsive, fast-loading, and optimized for conversions. Whether you sell a few items or manage a large online store, we ensure smooth navigation and attractive product pages. With our expertise in online store development, shopping cart integration, and secure payment gateways, we help businesses increase sales, build trust, and grow their digital presence effectively in today’s competitive market.",
    image: "/images/service/ecommerce-web-design.jpg",
  },
  {
    title: "Custom WhatsApp Business Solution",
    description:
      "Our custom WhatsApp Business Solution services deliver unique websites created from scratch to reflect your brand’s identity and vision. Unlike template-based Development, we focus on tailor-made layouts that match your business goals, target audience, and industry. From colors and fonts to features and functionality, everything is built to enhance your brand. A custom website ensures exclusivity, better performance, and strong online positioning. With our expertise in UI/UX design, business web solutions, and brand-focused website creation, we help you stand out, attract more visitors, and build long-term credibility in the digital space.",
    image: "/images/service/custom-web-design.jpg",
  },
  {
    title: "Mobile WhatsApp Business Solution",
    description:
      "With most users browsing on smartphones, mobile WhatsApp Business Solution is now a must. We design websites optimized for mobile users with responsive layouts, fast loading speed, and easy navigation. Our mobile-first approach ensures that your website looks and works perfectly on every screen size, from small smartphones to tablets. By focusing on seamless performance, we enhance user experience and reduce bounce rates. With our expertise in mobile-friendly website design, responsive layouts, and mobile optimization, we help businesses capture more traffic, improve engagement, and turn mobile visitors into loyal customers.",
    image: "/images/service/mobile-web-design.jpg",
  },
  {
    title: "Corporate Website Design",
    description:
      "Our corporate website design services help companies build a strong professional presence online. We design websites that highlight your company profile, services, achievements, and values in a polished and business-friendly way. A well-designed corporate site builds trust, attracts clients, and strengthens your brand identity. We focus on clean layouts, easy navigation, and engaging visuals that reflect your professionalism. With our expertise in business website design, corporate branding, and enterprise WhatsApp Business Solution, we ensure your company stands out in a competitive market and builds lasting credibility with customers and stakeholders.",
    image: "/images/service/corporate-website-design.jpg",
  },
  {
    title: "Responsive WhatsApp Business Solution Services",
    description:
      "Our responsive WhatsApp Business Solution services ensure that your website adapts automatically to desktops, tablets, and mobiles, offering visitors a consistent experience across all devices. A responsive website reduces maintenance, improves SEO ranking, and increases customer satisfaction. Whether users access your site on Chrome, Safari, or other browsers, they’ll enjoy smooth navigation and clear content display. With our expertise in cross-browser compatibility, mobile-friendly layouts, and adaptive WhatsApp Business Solution, we help businesses expand their reach, retain visitors longer, and generate more leads through modern, responsive, and user-focused websites.",
    image: "/images/service/responsive-web-design.jpg",
  },
  {
    title: "Dynamic Website Design",
    description:
      "We build dynamic websites that are interactive, flexible, and easy to update. Whether it’s blogs, product listings, forms, or content sections, dynamic websites allow businesses to make changes without technical knowledge. These websites engage visitors with fresh updates and interactive features. Perfect for businesses that need frequent content updates, they enhance user experience and functionality. With our expertise in CMS-based websites, interactive web solutions, and dynamic design development, we help brands stay current, provide engaging experiences, and grow their online presence with modern and scalable websites.",
    image: "/images/service/dynamic-website-design.jpg",
  },
  {
    title: "Static Website Design",
    description:
      "Our static website design services are ideal for small businesses, startups, or individuals who need a simple yet effective online presence. Static websites have fixed content, load quickly, and are budget-friendly. They work best for companies that don’t require frequent content updates. Despite their simplicity, our Development are professional, clean, and SEO-friendly, ensuring you leave a strong impression online. With our expertise in one-page websites, basic business WhatsApp Business Solution, and lightweight static websites, we help clients establish a credible identity and showcase their offerings effectively at low cost.",
    image: "/images/service/static-website-design.jpg",
  },
  {
    title: "Website ReDevelopment Services",
    description:
      "We offer website redesign services to transform outdated websites into modern, user-friendly platforms. From updating layouts and improving visuals to enhancing speed and mobile responsiveness, we give your site a complete makeover. A redesigned website improves user engagement, reduces bounce rates, and builds credibility. Whether you need better SEO performance, improved navigation, or a fresh corporate look, we can help. With our expertise in website revamp, modern UI/UX updates, and redesign services, we ensure your online presence stays competitive, relevant, and aligned with current digital trends.",
    image: "/images/service/website-redesigning-services.jpg",
  },
  {
    title: "PSD to HTML Services",
    description:
      "Our PSD to HTML conversion services turn your design files into fully functional, responsive websites. We carefully code your PSD Development into clean HTML while maintaining layout accuracy and browser compatibility. These websites are SEO-friendly, fast-loading, and mobile-optimized. By converting your creative Development into real websites, we ensure smooth performance across all platforms. With our expertise in HTML5 coding, responsive WhatsApp Business Solution, and PSD conversion, we provide reliable, pixel-perfect websites that are easy to manage, visually appealing, and effective for online business success.",
    image: "/images/service/psd-to-html-services.jpg",
  },
];

export default function TypeofService() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Types of <span className="text-red-600">WhatsApp Business Solution Services</span> We Provide
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto italic">
            Explore a range of WhatsApp Business Solution solutions tailored to meet every business need.
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