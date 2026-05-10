import { FC } from 'react'
import { SectionArchive } from '@/components/organisms/section-archive'
import { SectionReach } from '@/components/organisms/section-reach'
import { Main } from '@/components/sections/main'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionArchive id="archive" />
      <SectionReach id="contact" />
    </Main>
  )
}

export default Page
