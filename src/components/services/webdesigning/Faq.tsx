import React from 'react';

import FAQItem from '@/components/FAQItem';


// const faqData = [
//   {
//     id: 1,
//     question: "Why do I need a professional website?",
//     answer: "A professional website builds credibility, acts as a 24/7 sales tool, and ensures you own your digital presence instead of relying solely on social media algorithms."
//   },
//   {
//     id: 2,
//     question: "How much does website designing cost?",
//     answer: "Pricing varies based on complexity. A basic landing page starts lower, while a full e-commerce solution involves more integration and testing."
//   },
//   {
//     id: 3,
//     question: "How long does it take?",
//     answer: "Most standard business websites take 4–6 weeks from discovery to launch, depending on how quickly content and feedback are provided."
//   }
// ];

const faqData = [
  {
    id: 1,
    question: "Why should I have a professional website for my business?",
    answer: "A professionally designed website builds trust, works as a 24/7 marketing and sales tool, and gives you full control over your online presence instead of depending only on social media platforms."
  },
  {
    id: 2,
    question: "What is the cost of website design?",
    answer: "The cost depends on your requirements. Simple websites or landing pages are more affordable, while advanced websites like e-commerce platforms cost more due to added features and integrations."
  },
  {
    id: 3,
    question: "How much time does it take to design a website?",
    answer: "A standard business website usually takes around 4 to 6 weeks, depending on the project scope and how quickly content and feedback are shared."
  },
  {
    id: 4,
    question: "Will my website work well on mobile devices?",
    answer: "Yes, all websites are designed to be fully responsive, ensuring they work smoothly on mobiles, tablets, and desktops."
  },
  {
    id: 5,
    question: "Can I update my website content later on my own?",
    answer: "Yes, we build websites that are easy to manage, and we also provide basic guidance so you can update content whenever needed."
  },
  {
    id: 6,
    question: "Will my website be optimized for SEO?",
    answer: "Yes, we follow SEO-friendly practices like proper structure, fast loading speed, and clean coding to help improve your website’s visibility on search engines."
  },
  {
    id: 7,
    question: "Do you offer website redesign services?",
    answer: "Yes, we can redesign your existing website to give it a modern look, better performance, and improved user experience."
  },
  {
    id: 8,
    question: "Do you provide hosting and ongoing maintenance?",
    answer: "Yes, we offer support for hosting setup and ongoing maintenance to keep your website secure, updated, and running smoothly."
  },
  {
    id: 9,
    question: "What if I already have a PSD design ready?",
    answer: "We can convert your PSD design into a fully functional, responsive website with clean and optimized code."
  },
  {
    id: 10,
    question: "Can you add features like forms, chat, or payment systems?",
    answer: "Yes, we can integrate additional features such as contact forms, live chat, and secure payment gateways based on your requirements."
  }
];




export default function FAQSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
  Project <span className="text-red-500"> Questions</span>
</h2>
<p className="text-slate-500">All the essential details about how we work.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => (
            <FAQItem 
              key={item.id} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}