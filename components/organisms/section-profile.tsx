import { forwardRef, HTMLAttributes } from 'react'
import { differenceInCalendarYears } from 'date-fns'
import { fromZonedTime } from 'date-fns-tz'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Bg } from '@/components/atoms/bg'
import { Hypertext } from '@/components/atoms/hypertext'
import { Section } from '@/components/molecules/section'
import { appTimeZone } from '@/constants/date'
import { textStyles } from '@/constants/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col justify-center gap-16'),

  content: cva([
    'flex flex-col items-center justify-center gap-8',
    'lg:flex-row lg:items-center lg:justify-between'
  ]),
  stats: cva('flex flex-wrap justify-between gap-4'),

  photo: cva('w-full max-w-[480px]'),
  text: cva('flex flex-col gap-4 lg:order-first lg:w-1/2'),

  avatar: cva('h-full w-full max-w-[480px]'),
  stat: cva('flex w-[160px] flex-col gap-2 md:w-[220px] lg:w-[250px]')
}

type SectionProfileRef = HTMLDivElement
type SectionProfileProps = HTMLAttributes<SectionProfileRef> & VariantProps<typeof styles.root>

const SectionProfile = forwardRef<SectionProfileRef, SectionProfileProps>((props, ref) => {
  const { className, ...rest } = props

  const yearsSince = Math.abs(
    differenceInCalendarYears(new Date(), fromZonedTime('2017-04-01', appTimeZone))
  )

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg attach="local" variant="texture" />}
      height="auto"
      {...rest}
    >
      <div className={cn(styles.content())}>
        <div className={cn(styles.photo())}>
          <Avatar className={cn(styles.avatar())}>
            <AvatarImage alt="Tony Ko" src="/images/tkodev/dp-sq.jpg" />
            <AvatarFallback>Tony Ko</AvatarFallback>
          </Avatar>
        </div>
        <div className={cn(styles.text())}>
          <h1 className={cn(textStyles.h1())}>
            <Hypertext text="Tony Ko." />
          </h1>
          <h2 className={cn(textStyles.h2())}>
            Staff Software Engineer <br />& UI Designer
          </h2>
          <h3 className={cn(textStyles.h3())}>
            Crafting performant solutions, championing best practices, and empowering teams to
            innovate.
          </h3>
          <p>
            I’m Tony Ko, a Staff Software Engineer with over {yearsSince} years of experience
            delivering high-performing, secure, and accessible software solutions for top North
            American brands, including Aeroplan, Air Miles, and Toyota. My expertise spans web,
            mobile, browser extensions, and embedded systems, backed by a strong foundation in
            TypeScript, Lua, and C. Passionate about fostering team growth, I blend technical
            excellence with mentorship to lead impactful projects that drive innovation and achieve
            business goals.
          </p>
          <p>
            This portfolio represents the essence of everything I&apos;ve learned. I strive to let
            my &ldquo;soul&rdquo; shine through in the design of this work of art. I hope you enjoy
            exploring the site and the works it showcases!
          </p>
        </div>
      </div>
      <div className={cn(styles.stats())}>
        <div className={cn(styles.stat())}>
          <p className={cn(textStyles.h2())}>{yearsSince}+</p>
          <p className={cn(textStyles.h3())}>Years of Experience</p>
        </div>
        <div className={cn(styles.stat())}>
          <p className={cn(textStyles.h2())}>25+</p>
          <p className={cn(textStyles.h3())}>Projects Completed</p>
        </div>
        <div className={cn(styles.stat())}>
          <p className={cn(textStyles.h2())}>9+</p>
          <p className={cn(textStyles.h3())}>Stellar Endorsements</p>
        </div>
      </div>
    </Section>
  )
})
SectionProfile.displayName = 'SectionProfile'

export { SectionProfile }
export type { SectionProfileProps, SectionProfileRef }
