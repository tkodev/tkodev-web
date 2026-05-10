import { FC } from 'react'
import { SectionReach } from '@/components/organisms/section-reach'
import { SectionShots } from '@/components/organisms/section-shots'
import { Main } from '@/components/sections/main'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionShots id="shots" />
      <SectionReach id="contact" />
    </Main>
  )
}

export default Page
