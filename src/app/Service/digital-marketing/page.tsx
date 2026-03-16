import InnerHeader from '@/components/InnerHeader'
import WhyChoose from '@/components/services/digitalmarketing/WhyChoose';
import TypeofService from '@/components/services/digitalmarketing/TypeofService';
import ToolsTechnologies from '@/components/services/digitalmarketing/ToolsTechnologies';
import WhatYouGet from '@/components/services/digitalmarketing/WhatYouGet';
import OurProcess from '@/components/services/digitalmarketing/OurProcess';
import Faq from '@/components/services/digitalmarketing/Faq';

function page() {
  return (
    <>
      <InnerHeader 
                title="Digital Marketing Solutions" 
                subtitle="Boost your online visibility and reach more customers with our effective digital marketing services." 
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