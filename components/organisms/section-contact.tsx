import Link from 'next/link'
import { forwardRef, HTMLAttributes } from 'react'
import {
  FileUserIcon,
  GithubIcon,
  LinkedinIcon,
  LucideIcon,
  MailIcon,
  PhoneIcon
} from 'lucide-react'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Hypertext } from '@/components/atoms/hypertext'
import { Icon } from '@/components/atoms/icon'
import { Section } from '@/components/molecules/section'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/molecules/table'
import { profileEntries } from '@/constants/profile'
import { textStyles } from '@/constants/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col justify-center gap-16'),

  content: cva([
    'flex flex-col items-center justify-center gap-8',
    'lg:flex-row lg:items-center lg:justify-between'
  ]),
  icon: cva('w-auto'),
  text: cva('flex flex-col gap-4 lg:order-first lg:w-[65%]'),

  tableTitleHead: cva('w-[30%]'),
  tableHead: cva('w-[30%]'),
  tableCellChannel: cva('flex items-center gap-4'),
  tableCellValue: cva('align-middle'),

  note: cva('text-muted-foreground text-sm')
}

type LinkEntry = {
  href: (p: typeof profileEntries.tony) => string
  icon: LucideIcon
  label: string
  value: string
  external: boolean
}

const links: LinkEntry[] = [
  {
    href: (p) => p.linkedin,
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'tkodev',
    external: true
  },
  {
    href: (p) => p.github,
    icon: GithubIcon,
    label: 'GitHub',
    value: 'tkodev',
    external: true
  },
  {
    href: (p) => `mailto:${p.email}`,
    icon: MailIcon,
    label: 'Email',
    value: 'tony@tko.dev',
    external: false
  },
  {
    href: (p) => `tel:${p.phone}`,
    icon: PhoneIcon,
    label: 'Phone',
    value: '+1 (647) 300-9787',
    external: false
  },
  {
    href: () => '/files/tony-ko-resume-2026.pdf',
    icon: FileUserIcon,
    label: 'Resume',
    value: 'tony-ko-resume-2026.pdf',
    external: true
  }
]

type SectionContactRef = HTMLDivElement
type SectionContactProps = HTMLAttributes<SectionContactRef> & VariantProps<typeof styles.root>

const SectionContact = forwardRef<SectionContactRef, SectionContactProps>((props, ref) => {
  const { className, ...rest } = props
  const tony = profileEntries.tony

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg attach="local" variant="texture" />}
      height="auto"
      {...rest}
    >
      <div className={cn(styles.content())}>
        <div className={cn(styles.icon())}>
          <Icon icon={MailIcon} size="3xl" />
        </div>
        <div className={cn(styles.text())}>
          <h1 className={cn(textStyles.h1())}>
            <Hypertext text="Contact." />
          </h1>
          <h2 className={cn(textStyles.h2())}>Let&apos;s Build Something Exceptional Together.</h2>
          <p>
            Ready to collaborate or explore new opportunities? I&apos;m open to connections and
            passionate about building impactful software that scales with user needs. Reach out
            through any of the channels below.
          </p>
          <p className={cn(styles.note())}>
            * Currently not available for contract projects. Contact me via LinkedIn or email.
          </p>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className={cn(styles.tableTitleHead())}>Channel</TableHead>
            <TableHead className={cn(styles.tableHead())}>Handle</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {links.map(({ href, icon, label, value, external }) => (
            <TableRow key={label}>
              <TableCell className={cn(styles.tableCellChannel())}>
                <Icon icon={icon} size="xs" />
                {label}
              </TableCell>
              <TableCell className={cn(styles.tableCellValue())}>
                <Button variant="default" asChild>
                  <Link href={href(tony)} target={external ? '_blank' : undefined}>
                    {value}
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  )
})
SectionContact.displayName = 'SectionContact'

export { SectionContact }
export type { SectionContactProps, SectionContactRef }
