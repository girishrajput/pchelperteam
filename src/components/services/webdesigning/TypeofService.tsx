import { ServiceCard } from "@/components/TypeofServiceCard";

// const SERVICE_DATA = [
//   {
//     title: "Ecommerce Web Design",
//     description:
//       "We create professional eCommerce websites that make online selling easier. With user-friendly layouts, clear product displays, and secure checkout options, your customers can shop with confidence. Our eCommerce designs are responsive, fast-loading, and optimized for conversions. Whether you sell a few items or manage a large online store, we ensure smooth navigation and attractive product pages. With our expertise in online store development, shopping cart integration, and secure payment gateways, we help businesses increase sales, build trust, and grow their digital presence effectively in today’s competitive market.",
//     image: "/images/service/ecommerce-web-design.jpg",
//   },
//   {
//     title: "Custom Web Design",
//     description:
//       "Our custom web design services deliver unique websites created from scratch to reflect your brand’s identity and vision. Unlike template-based designs, we focus on tailor-made layouts that match your business goals, target audience, and industry. From colors and fonts to features and functionality, everything is built to enhance your brand. A custom website ensures exclusivity, better performance, and strong online positioning. With our expertise in UI/UX design, business web solutions, and brand-focused website creation, we help you stand out, attract more visitors, and build long-term credibility in the digital space.",
//     image: "/images/service/custom-web-design.jpg",
//   },
//   {
//     title: "Mobile Web Design",
//     description:
//       "With most users browsing on smartphones, mobile web design is now a must. We design websites optimized for mobile users with responsive layouts, fast loading speed, and easy navigation. Our mobile-first approach ensures that your website looks and works perfectly on every screen size, from small smartphones to tablets. By focusing on seamless performance, we enhance user experience and reduce bounce rates. With our expertise in mobile-friendly website design, responsive layouts, and mobile optimization, we help businesses capture more traffic, improve engagement, and turn mobile visitors into loyal customers.",
//     image: "/images/service/mobile-web-design.jpg",
//   },
//   {
//     title: "Corporate Website Design",
//     description:
//       "Our corporate website design services help companies build a strong professional presence online. We design websites that highlight your company profile, services, achievements, and values in a polished and business-friendly way. A well-designed corporate site builds trust, attracts clients, and strengthens your brand identity. We focus on clean layouts, easy navigation, and engaging visuals that reflect your professionalism. With our expertise in business website design, corporate branding, and enterprise web development, we ensure your company stands out in a competitive market and builds lasting credibility with customers and stakeholders.",
//     image: "/images/service/corporate-website-design.jpg",
//   },
//   {
//     title: "Responsive Web Design Services",
//     description:
//       "Our responsive web design services ensure that your website adapts automatically to desktops, tablets, and mobiles, offering visitors a consistent experience across all devices. A responsive website reduces maintenance, improves SEO ranking, and increases customer satisfaction. Whether users access your site on Chrome, Safari, or other browsers, they’ll enjoy smooth navigation and clear content display. With our expertise in cross-browser compatibility, mobile-friendly layouts, and adaptive web design, we help businesses expand their reach, retain visitors longer, and generate more leads through modern, responsive, and user-focused websites.",
//     image: "/images/service/responsive-web-design.jpg",
//   },
//   {
//     title: "Dynamic Website Design",
//     description:
//       "We build dynamic websites that are interactive, flexible, and easy to update. Whether it’s blogs, product listings, forms, or content sections, dynamic websites allow businesses to make changes without technical knowledge. These websites engage visitors with fresh updates and interactive features. Perfect for businesses that need frequent content updates, they enhance user experience and functionality. With our expertise in CMS-based websites, interactive web solutions, and dynamic design development, we help brands stay current, provide engaging experiences, and grow their online presence with modern and scalable websites.",
//     image: "/images/service/dynamic-website-design.jpg",
//   },
//   {
//     title: "Static Website Design",
//     description:
//       "Our static website design services are ideal for small businesses, startups, or individuals who need a simple yet effective online presence. Static websites have fixed content, load quickly, and are budget-friendly. They work best for companies that don’t require frequent content updates. Despite their simplicity, our designs are professional, clean, and SEO-friendly, ensuring you leave a strong impression online. With our expertise in one-page websites, basic business web design, and lightweight static websites, we help clients establish a credible identity and showcase their offerings effectively at low cost.",
//     image: "/images/service/static-website-design.jpg",
//   },
//   {
//     title: "Website Redesigning Services",
//     description:
//       "We offer website redesign services to transform outdated websites into modern, user-friendly platforms. From updating layouts and improving visuals to enhancing speed and mobile responsiveness, we give your site a complete makeover. A redesigned website improves user engagement, reduces bounce rates, and builds credibility. Whether you need better SEO performance, improved navigation, or a fresh corporate look, we can help. With our expertise in website revamp, modern UI/UX updates, and redesign services, we ensure your online presence stays competitive, relevant, and aligned with current digital trends.",
//     image: "/images/service/website-redesigning-services.jpg",
//   },
//   {
//     title: "PSD to HTML Services",
//     description:
//       "Our PSD to HTML conversion services turn your design files into fully functional, responsive websites. We carefully code your PSD designs into clean HTML while maintaining layout accuracy and browser compatibility. These websites are SEO-friendly, fast-loading, and mobile-optimized. By converting your creative designs into real websites, we ensure smooth performance across all platforms. With our expertise in HTML5 coding, responsive web development, and PSD conversion, we provide reliable, pixel-perfect websites that are easy to manage, visually appealing, and effective for online business success.",
//     image: "/images/service/psd-to-html-services.jpg",
//   },
// ];

const SERVICE_DATA = [
  {
    title: "Ecommerce Website Design",
    description:
      "We build modern eCommerce websites that simplify online selling. With intuitive layouts, well-organized product showcases, and secure checkout systems, customers can shop with ease and trust. Our designs are fully responsive, fast, and optimized to drive conversions. Whether you run a small shop or a large catalog, we ensure smooth browsing and appealing product presentation. Using advanced eCommerce development, shopping cart solutions, and secure payment integration, we help businesses boost sales, strengthen credibility, and expand their digital footprint effectively.",
    image: "/images/service/ecommerce-web-design.jpg",
  },
  {
    title: "Personalized Web Design",
    description:
      "Our personalized web design services create unique websites tailored to match your brand identity and business goals. Instead of relying on templates, we design every element from scratch, including layout, colors, and features. This approach ensures a distinctive online presence and better performance. With strong focus on UI/UX, branding, and custom functionality, we help you attract the right audience, stand out from competitors, and establish long-term trust in the digital space.",
    image: "/images/service/custom-web-design.jpg",
  },
  {
    title: "Mobile-Optimized Web Design",
    description:
      "As most users browse on mobile devices, we design websites with a mobile-first approach. Our mobile-optimized websites load quickly, are easy to navigate, and adapt perfectly to all screen sizes. This improves user engagement and lowers bounce rates. With expertise in responsive design and mobile usability, we help businesses reach a wider audience and convert mobile visitors into loyal customers.",
    image: "/images/service/mobile-web-design.jpg",
  },
  {
    title: "Business Website Design",
    description:
      "We design professional business websites that present your company in a strong and credible way. From showcasing your services to highlighting achievements and values, our designs focus on clarity and trust. Clean layouts, smooth navigation, and engaging visuals help attract potential clients. With expertise in corporate branding and business-focused design, we ensure your website leaves a lasting impression and builds credibility in the market.",
    image: "/images/service/corporate-website-design.jpg",
  },
  {
    title: "Responsive Website Solutions",
    description:
      "Our responsive website solutions ensure your site works seamlessly across desktops, tablets, and smartphones. Visitors experience consistent performance and design regardless of device or browser. A responsive approach improves SEO, reduces maintenance, and enhances user satisfaction. With strong expertise in adaptive layouts and cross-browser compatibility, we help businesses reach more users and generate higher engagement and leads.",
    image: "/images/service/responsive-web-design.jpg",
  },
  {
    title: "Interactive Website Development",
    description:
      "We create dynamic and interactive websites that are flexible and easy to update. From blogs and forms to product sections, these websites allow quick content changes without technical skills. They keep users engaged with fresh content and interactive elements. With our expertise in CMS platforms and dynamic web solutions, we help businesses maintain an active online presence and deliver engaging user experiences.",
    image: "/images/service/dynamic-website-design.jpg",
  },
  {
    title: "Basic Website Design",
    description:
      "Our basic website design services are perfect for startups and small businesses looking for a simple online presence. These websites are lightweight, fast-loading, and cost-effective, making them ideal for static content. Despite being simple, we ensure professional design and SEO-friendly structure so your business appears credible and polished online.",
    image: "/images/service/static-website-design.jpg",
  },
  {
    title: "Website Revamp Services",
    description:
      "We help upgrade outdated websites into modern, high-performing platforms. From redesigning layouts to improving speed and responsiveness, we give your website a fresh and updated look. A revamped website increases engagement, enhances credibility, and improves search visibility. Our redesign solutions ensure your business stays competitive and aligned with current trends.",
    image: "/images/service/website-redesigning-services.jpg",
  },
  {
    title: "Design to Code Conversion",
    description:
      "Our PSD to HTML services convert your design files into clean, responsive, and functional websites. We ensure pixel-perfect accuracy while maintaining fast performance and SEO-friendly structure. The final output works smoothly across all browsers and devices. With expertise in HTML5 and responsive coding, we transform your designs into reliable and high-quality websites ready for real-world use.",
    image: "/images/service/psd-to-html-services1.jpg",
  },
];

export default function TypeofService() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Our Range of <span className="text-red-600">Website Design Services</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Discover various web design options created to suit different business requirements.
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