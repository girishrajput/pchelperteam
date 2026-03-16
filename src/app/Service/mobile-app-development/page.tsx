import InnerHeader from '@/components/InnerHeader'
import WhyChoose from '@/components/services/mobileappdevelopment/WhyChoose';
import TypeofService from '@/components/services/mobileappdevelopment/TypeofService';
import ToolsTechnologies from '@/components/services/mobileappdevelopment/ToolsTechnologies';
import WhatYouGet from '@/components/services/mobileappdevelopment/WhatYouGet';
import OurProcess from '@/components/services/mobileappdevelopment/OurProcess';
import Faq from '@/components/services/mobileappdevelopment/Faq';

function page() {
  return (
    <>
      <InnerHeader 
                title="Mobile App Development Services" 
                subtitle="We create fast, secure, and user-friendly mobile apps for Android, iOS, and hybrid platforms that boost engagement, enhance experience, and grow your business digitall." 
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