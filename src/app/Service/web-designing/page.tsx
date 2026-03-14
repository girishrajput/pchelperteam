import InnerHeader from '@/components/InnerHeader'
import Features from '@/components/services/Features';
import ServiceSection from '@/components/services/ServiceSection';
import Process from '@/components/services/Process';
import Faq from '@/components/services/Faq';
import TypeofService from '@/components/services/TypeofService';


function page() {
  return (
    <>
      <InnerHeader 
                title="Web Design" 
                subtitle="We create clean, modern, and responsive websites that represent your brand perfectly, delivering a seamless user experience across all devices." 
            />
      <ServiceSection />
      <TypeofService/>
      <Features />
      <Process />
      <Faq />
    </>
  )
}

export default page;