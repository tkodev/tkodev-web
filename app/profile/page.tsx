import { SectionClients } from '@/components/organisms/section-clients'
import { SectionReach } from '@/components/organisms/section-reach'
import { SectionJobs } from '@/components/organisms/section-jobs'
import { SectionProfile } from '@/components/organisms/section-profile'
import { Main } from '@/components/sections/main'

const Page = () => {
  return (
    <Main>
      <SectionProfile id="intro" />
      <SectionClients id="companies" />
      <SectionJobs id="jobs" />
      <SectionReach id="contact" />
    </Main>
  )
}

export default Page
