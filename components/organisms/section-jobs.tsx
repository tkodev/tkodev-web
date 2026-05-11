import Link from 'next/link'
import { forwardRef, HTMLAttributes } from 'react'
import { differenceInCalendarYears } from 'date-fns'
import { fromZonedTime } from 'date-fns-tz'
import { LinkedinIcon } from 'lucide-react'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Client } from '@/components/atoms/client'
import { Icon } from '@/components/atoms/icon'
import { Section } from '@/components/molecules/section'
import { clientEntries } from '@/constants/client'
import { appTimeZone } from '@/constants/date'
import { jobEntries } from '@/constants/job'
import { textStyles } from '@/constants/theme'
import { formatStdDateRange } from '@/utils/date'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col gap-16'),

  content: cva('flex flex-col items-center justify-center gap-8'),
  cta: cva('flex justify-center'),

  text: cva('flex flex-col gap-4'),
  jobs: cva('divide-border flex w-full flex-col divide-y'),

  job: cva('grid grid-cols-[1fr_auto] items-center justify-center gap-4 py-8'),
  client: cva('hidden md:block')
}

type SectionJobsRef = HTMLDivElement
type SectionJobsProps = HTMLAttributes<SectionJobsRef> & VariantProps<typeof styles.root>

const SectionJobs = forwardRef<SectionJobsRef, SectionJobsProps>((props, ref) => {
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
        <div className={cn(styles.text())}>
          <h2 className={cn(textStyles.h2())}>Driving Impact Through Expertise and Leadership.</h2>
          <p>
            With a career spanning over {yearsSince} years, I’ve progressed from foundational roles
            to Staff Engineer, leading technical strategy, architecture, and team mentorship. I’ve
            collaborated with companies like Badal.io, Quantum Mob, and Brandfire to build
            performant systems and nurture growth within engineering teams.
          </p>
        </div>
        <div className={cn(styles.jobs())}>
          {jobEntries
            .slice(0, 8)
            .map(({ companyId, companyName, title, startDate, endDate, location }, index) => {
              const clientEntry = clientEntries[companyId]
              return (
                <div key={`job-${index}`} className={cn(styles.job())}>
                  <div>
                    <p>
                      <strong>
                        {title} @ {companyName}
                      </strong>
                    </p>
                    <p>
                      <em>
                        {formatStdDateRange(startDate, endDate, appTimeZone)} · {location}
                      </em>
                    </p>
                  </div>
                  <div>
                    {!!clientEntry && (
                      <Link
                        key={`company-${companyId}`}
                        className={cn(styles.client())}
                        href={clientEntry.href}
                        target="_blank"
                      >
                        <Client
                          darkSrc={clientEntry.darkSrc}
                          lightSrc={clientEntry.lightSrc}
                          alt={`Logo of ${clientEntry.name}`}
                          height={50}
                          width={200}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <div className={cn(styles.cta())}>
        <Button size="lg" asChild>
          <Link href="https://www.linkedin.com/in/tkodev/" target="_blank">
            <Icon icon={LinkedinIcon} /> Explore Full History
          </Link>
        </Button>
      </div>
    </Section>
  )
})
SectionJobs.displayName = 'SectionJobs'

export { SectionJobs }
export type { SectionJobsProps, SectionJobsRef }
