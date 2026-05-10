import { FC } from 'react'
import { SectionExample } from '@/components/organisms/section-example'
import { Main } from '@/components/sections/main'
import { PageProps } from '@/types/layout'

const Page: FC<PageProps> = async () => {
  return (
    <Main>
      <SectionExample id="wip" />
    </Main>
  )
}

export default Page
