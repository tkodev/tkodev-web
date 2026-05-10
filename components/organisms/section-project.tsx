import { forwardRef, HTMLAttributes } from 'react'
import { kebabCase } from 'change-case'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Markdown } from '@/components/atoms/markdown'
import { Media } from '@/components/atoms/media'
import { Section } from '@/components/molecules/section'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/molecules/table'
import { DialogMedia } from '@/components/organisms/dialog-media'
import { clientEntries } from '@/constants/client'
import { appTimeZone } from '@/constants/date'
import { profileEntries } from '@/constants/profile'
import { textStyles } from '@/constants/theme'
import { ProjectEntry } from '@/types/project'
import { formatStdDateRange } from '@/utils/date'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col justify-center gap-16'),

  content: cva([
    'flex flex-col items-center justify-center gap-8',
    'lg:flex-row lg:items-center lg:justify-between'
  ]),
  text: cva('flex flex-col gap-4'),
  desc: cva('flex flex-col gap-4 lg:mt-8'),

  tableHead: cva('w-[20%]'),
  tableRoles: cva('capitalize'),
  skills: cva('flex flex-wrap gap-2')
}

type SectionProjectRef = HTMLDivElement
type SectionProjectProps = HTMLAttributes<SectionProjectRef> &
  VariantProps<typeof styles.root> & {
    projectEntry: ProjectEntry
  }

const SectionProject = forwardRef<SectionProjectRef, SectionProjectProps>((props, ref) => {
  const { projectEntry, className, ...rest } = props
  const { title, media, intro, desc, roles, clientId, profileIds, startDate, endDate, skills } =
    projectEntry
  const client = clientEntries[clientId]

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg attach="local" position="top" size="repeat" variant="texture" />}
      height="auto"
      {...rest}
    >
      <div className={cn(styles.content())}>
        <div className={cn(styles.text())}>
          <h1 className={cn(textStyles.h1())}>{title}</h1>
          <Markdown>{intro}</Markdown>
          <div className={cn(styles.skills())}>
            {skills.map((skill) => (
              <Button key={`skill-${kebabCase(skill)}`} size="xs" variant="secondary">
                {skill}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className={cn(styles.tableHead())}>Roles</TableHead>
            <TableHead className={cn(styles.tableHead())}>Client</TableHead>
            <TableHead className={cn(styles.tableHead())}>Credits</TableHead>
            <TableHead className={cn(styles.tableHead())}>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className={cn(styles.tableRoles())}>{roles.join(', ')}</TableCell>
            <TableCell>{client.name}</TableCell>
            <TableCell>
              {profileIds.map((profileId) => (
                <p key={`profile-${profileId}`}>{profileEntries[profileId].name}</p>
              ))}
            </TableCell>
            <TableCell>{formatStdDateRange(startDate, endDate, appTimeZone)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {media[0] && (
        <DialogMedia mediaEntry={media[0]}>
          <button>
            <Media mediaEntry={media[0]} isHover />
          </button>
        </DialogMedia>
      )}
      {!!desc && (
        <div className={cn(styles.desc())}>
          <h2 className={cn(textStyles.h2())}>In Depth</h2>
          <Markdown>{desc}</Markdown>
        </div>
      )}
    </Section>
  )
})
SectionProject.displayName = 'SectionProject'

export { SectionProject }
export type { SectionProjectProps, SectionProjectRef }
