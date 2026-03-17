import InnerHeader from '@/components/InnerHeader'
import TypeofService from '@/components/industries/b2b/TypeofService';
import Faq from '@/components/industries/b2b/Faq';

function page() {
  return (
    <>
      <InnerHeader 
                title="Smart B2B Solutions" 
                subtitle="Helping manufacturers and suppliers grow with easy online trade solutions." 
            />
      <TypeofService/>
      <Faq />
    </>
  )
}

export default page;