import InnerHeader from '@/components/InnerHeader'
import TypeofService from '@/components/industries/realestate/TypeofService';
import Faq from '@/components/industries/realestate/Faq';

function page() {
  return (
    <>
      <InnerHeader 
                title="Real Estate Through Technology" 
                subtitle="Boosting real estate success through simple websites, apps, and lead tools." 
            />
      <TypeofService/>
      <Faq />
    </>
  )
}

export default page;