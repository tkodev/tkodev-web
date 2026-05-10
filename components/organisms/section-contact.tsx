import Link from 'next/link'
import { forwardRef, HTMLAttributes } from 'react'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Section } from '@/components/molecules/section'
import { profileEntries } from '@/constants/profile'
import { textStyles } from '@/constants/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col gap-16'),

  content: cva([
    'flex flex-col items-center justify-center gap-8',
    'lg:flex-row lg:items-center lg:justify-between'
  ]),

  text: cva('flex flex-col gap-4 lg:max-w-[55%]'),
  contact: cva('flex flex-wrap justify-center gap-4 lg:max-w-[360px] lg:justify-end')
}

type SectionContactRef = HTMLDivElement
type SectionContactProps = HTMLAttributes<SectionContactRef> & VariantProps<typeof styles.root>

const SectionContact = forwardRef<SectionContactRef, SectionContactProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg variant="gradient" />}
      height="auto"
      {...rest}
    >
      <div className={cn(styles.content())}>
        <div className={cn(styles.text())}>
          <h2 className={cn(textStyles.h2())}>Let’s Build Something Exceptional Together.</h2>
          <p>
            Ready to collaborate or explore new opportunities? I’m open to connections and
            passionate about building impactful software that scales with user needs. Reach out, and
            let’s create something extraordinary.
          </p>
          <p>
            <strong>
              * Currently not available for freelance projects. Contact my company via Email.
            </strong>
          </p>
        </div>
        <div className={cn(styles.contact())}>
          <Button size="lg" asChild>
            <Link href={profileEntries.tony.linkedin} target="_blank">
              <Icon icon={LinkedinIcon} /> LinkedIn: <u>tkodev</u>
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href={profileEntries.tony.github} target="_blank">
              <Icon icon={GithubIcon} /> Github: <u>tkodev</u>
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href={`mailto:${profileEntries.tony.email}`} target="_blank">
              <Icon icon={MailIcon} /> Email: <u>tony@tko.dev</u>
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href={`mailto:${profileEntries.tony.phone}`} target="_blank">
              <Icon icon={PhoneIcon} /> Phone: <u>+1 (647) 300-9787</u>
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
})
SectionContact.displayName = 'SectionContact'

export { SectionContact }
export type { SectionContactProps, SectionContactRef }
