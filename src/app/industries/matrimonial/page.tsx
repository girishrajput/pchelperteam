import InnerHeader from '@/components/InnerHeader'
import TypeofService from '@/components/industries/matrimonial/TypeofService';
import Faq from '@/components/industries/matrimonial/Faq';

function page() {
  return (
    <>
      <InnerHeader 
                title="Digital Matrimonial Solutions" 
                subtitle="Bringing brides, grooms, and families together with easy and effective digital matchmaking." 
            />
      <TypeofService/>
      <Faq />
    </>
  )
}

export default page;