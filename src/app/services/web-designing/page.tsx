import InnerHeader from '@/components/InnerHeader'
import WhyChoose from '@/components/services/webdesigning/WhyChoose';
import TypeofService from '@/components/services/webdesigning/TypeofService';
import ToolsTechnologies from '@/components/services/webdesigning/ToolsTechnologies';
import WhatYouGet from '@/components/services/webdesigning/WhatYouGet';
import OurProcess from '@/components/services/webdesigning/OurProcess';
import Faq from '@/components/services/webdesigning/Faq';

function page() {
  return (
    <>
      <InnerHeader 
                title="Web Design" 
                subtitle="We create clean, modern, and responsive websites that represent your brand perfectly, delivering a seamless user experience across all devices." 
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