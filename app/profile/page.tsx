import { SectionClients } from '@/components/organisms/section-clients'
import { SectionContact } from '@/components/organisms/section-contact'
import { SectionJobs } from '@/components/organisms/section-jobs'
import { SectionProfile } from '@/components/organisms/section-profile'
import { Main } from '@/components/sections/main'

const Page = () => {
  return (
    <Main>
      <SectionProfile id="intro" />
      <SectionClients id="companies" />
      <SectionJobs id="jobs" />
      <SectionContact id="contact" />
    </Main>
  )
}

export default Page
