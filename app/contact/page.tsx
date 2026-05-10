import { FC } from 'react'
import { SectionContact } from '@/components/organisms/section-contact'
import { Main } from '@/components/sections/main'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionContact id="contact" />
    </Main>
  )
}

export default Page
