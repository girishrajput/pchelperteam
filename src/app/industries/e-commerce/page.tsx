import InnerHeader from '@/components/InnerHeader'
import TypeofService from '@/components/industries/e-commerce/TypeofService';
import Faq from '@/components/industries/e-commerce/Faq';

function page() {
  return (
    <>
      <InnerHeader 
                title="Smart E-commerce Solutions" 
                subtitle="Supporting B2B businesses with simple websites, apps, and smooth payment options." 
            />
      <TypeofService/>
      <Faq />
    </>
  )
}

export default page;