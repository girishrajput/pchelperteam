import InnerHeader from '@/components/InnerHeader'
import WhyChoose from '@/components/services/whatsappbusiness/WhyChoose';
import TypeofService from '@/components/services/whatsappbusiness/TypeofService';
import ToolsTechnologies from '@/components/services/whatsappbusiness/ToolsTechnologies';
import WhatYouGet from '@/components/services/whatsappbusiness/WhatYouGet';
import OurProcess from '@/components/services/whatsappbusiness/OurProcess';
import Faq from '@/components/services/whatsappbusiness/Faq';

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