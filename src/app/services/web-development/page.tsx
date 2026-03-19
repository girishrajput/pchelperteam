import InnerHeader from '@/components/InnerHeader'
import WhyChoose from '@/components/services/webdevelopment/WhyChoose';
import TypeofService from '@/components/services/webdevelopment/TypeofService';
import ToolsTechnologies from '@/components/services/webdevelopment/ToolsTechnologies';
import WhatYouGet from '@/components/services/webdevelopment/WhatYouGet';
import OurProcess from '@/components/services/webdevelopment/OurProcess';
import Faq from '@/components/services/webdevelopment/Faq';

function page() {
  return (
    <>
      <InnerHeader 
                title="WhatsApp Business Solution" 
                subtitle="We build fast, secure, and user-friendly websites tailored to your brand. Our modern themes, clean design, and advanced technology help your business grow online effortlessly." 
            />
      <WhyChoose />
      <TypeofService/>
      <ToolsTechnologies />
      <WhatYouGet />
      <OurProcess />
      <Faq />
    </>
  )
}

export default page;