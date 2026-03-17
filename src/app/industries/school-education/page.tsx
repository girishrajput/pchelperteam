import InnerHeader from '@/components/InnerHeader'
import TypeofService from '@/components/industries/schoolneducation/TypeofService';
import Faq from '@/components/industries/schoolneducation/Faq';

function page() {
  return (
    <>
      <InnerHeader 
                title="Modern Education Solutions" 
                subtitle="Supporting schools and colleges with easy tools for studies and communication." 
      />
      <TypeofService/>
      <Faq />
    </>
  )
}

export default page;