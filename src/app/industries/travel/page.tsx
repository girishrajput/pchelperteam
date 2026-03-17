import InnerHeader from '@/components/InnerHeader'
import TypeofService from '@/components/industries/travel/TypeofService';
import Faq from '@/components/industries/travel/Faq';

function page() {
  return (
    <>
      <InnerHeader 
                title="Travel Agencies and Operators" 
                subtitle="Helping travel businesses manage bookings and improve customer experiences easily." 
            />
      <TypeofService/>
      <Faq />
    </>
  )
}

export default page;