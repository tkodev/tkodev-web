import { notFound } from 'next/navigation'
import { FC } from 'react'
import { camelCase, kebabCase } from 'change-case'
import { SectionContact } from '@/components/organisms/section-contact'
import { SectionFrames } from '@/components/organisms/section-frames'
import { SectionMedia } from '@/components/organisms/section-media'
import { SectionProject } from '@/components/organisms/section-project'
import { Main } from '@/components/sections/main'
import { projectEntries, projectIds } from '@/constants/project'
import { ProjectId } from '@/types/project'

type PageProps = {
  params: Promise<{ projectIdPath: string }>
}

const generateStaticParams = async () => {
  return projectIds.map((projectId) => ({ projectIdPath: kebabCase(projectId) }))
}

const Page: FC<PageProps> = async (props) => {
  const { params } = props
  const { projectIdPath } = await params
  const projectId = camelCase(projectIdPath) as ProjectId

  const projectEntry = projectEntries[projectId]
  if (!projectEntry) notFound()

  const desktopEntries = projectEntry.frames.filter(
    (frameEntry) => frameEntry.frameId === 'desktop'
  )
  const mobileEntries = projectEntry.frames.filter((frameEntry) => frameEntry.frameId === 'mobile')
  const mediaEntries =
    projectEntry.media.length > 1 ? projectEntry.media : projectEntry.media.slice(1)

  return (
    <Main>
      <SectionProject id="works" projectEntry={projectEntry} />
      <SectionFrames id="frames-desktop" frameEntries={desktopEntries} />
      <SectionFrames id="frames-mobile" frameEntries={mobileEntries} isParallax />
      <SectionMedia id="media" mediaEntries={mediaEntries} />
      <SectionContact id="contact" />
    </Main>
  )
}

export { generateStaticParams }
export default Page
