import InnerHeader from '@/components/InnerHeader'
import WhyChoose from '@/components/services/promotionalvideos/WhyChoose';
import TypeofService from '@/components/services/promotionalvideos/TypeofService';
import ToolsTechnologies from '@/components/services/promotionalvideos/ToolsTechnologies';
import WhatYouGet from '@/components/services/promotionalvideos/WhatYouGet';
import OurProcess from '@/components/services/promotionalvideos/OurProcess';
import Faq from '@/components/services/promotionalvideos/Faq';

function page() {
  return (
    <>
      <InnerHeader 
                title="Promotional Video Services" 
                subtitle="Boost your online visibility and reach more customers with our effective promotional video services." 
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