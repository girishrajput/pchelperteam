import InnerHeader from '@/components/InnerHeader'
import TypeofService from '@/components/industries/jobsrecruiters/TypeofService';
import Faq from '@/components/industries/jobsrecruiters/Faq';

function page() {
  return (
    <>
      <InnerHeader 
                title="Smart Recruitment Solutions" 
                subtitle="Connecting employers and job seekers with the right opportunities and talent across industries." 
            />
      <TypeofService/>
      <Faq />
    </>
  )
}

export default page;