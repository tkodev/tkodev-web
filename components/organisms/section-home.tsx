import Link from 'next/link'
import { forwardRef, HTMLAttributes } from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Bg } from '@/components/atoms/bg'
import { Brand } from '@/components/atoms/brand'
import { Button } from '@/components/atoms/button'
import { Cross } from '@/components/atoms/cross'
import { Icon } from '@/components/atoms/icon'
import { Section } from '@/components/molecules/section'
import { textStyles } from '@/constants/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex items-center justify-center'),

  container: cva([
    'relative h-full w-full max-w-[960px] grow-0',
    'flex flex-col items-center justify-center'
  ]),

  content: cva([
    'aspect-square h-auto w-full',
    'relative',
    'flex flex-col items-center justify-center',
    'lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-left'
  ]),
  intro: cva([
    'h-auto w-[320px] max-w-[96%] text-center lg:w-[200px]',
    '-mt-8 sm:-mt-16 md:-mt-24 lg:mt-0',
    'lg:absolute lg:top-1/2 lg:left-[78%] lg:-translate-y-1/2 lg:text-left xl:left-[82%]',
    'flex flex-col gap-2'
  ]),

  cross: cva(['h-auto w-full', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2']),
  brand1: cva([
    'relative -left-8 h-auto w-[75%]',
    'animate-slide-down transition-all duration-1000 hover:scale-105'
  ]),
  brand2: cva([
    'relative h-auto w-[75%]',
    'animate-fade-in transition-all duration-1000 hover:scale-105'
  ]),
  brand3: cva([
    'relative left-8 h-auto w-[75%]',
    'animate-slide-up transition-all duration-1000 hover:scale-105'
  ]),
  avatar: cva([
    'h-auto w-[50%]',
    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'transition-all duration-1000 hover:scale-105'
  ]),

  cta: cva('mt-2')
}

type SectionHomeRef = HTMLDivElement
type SectionHomeProps = HTMLAttributes<SectionHomeRef> & VariantProps<typeof styles.root>

const SectionHome = forwardRef<SectionHomeRef, SectionHomeProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg attach="local" variant="texture" />}
      {...rest}
    >
      <div className={cn(styles.container())}>
        <div className={cn(styles.content())}>
          <Cross className={cn(styles.cross())} />
          <Brand className={cn(styles.brand1())} variant="fill" />
          <Brand className={cn(styles.brand2())} variant="outline" />
          <Avatar className={cn(styles.avatar())}>
            <AvatarImage alt="Tony Ko" src="/images/tkodev/dp-sq.jpg" />
            <AvatarFallback>-</AvatarFallback>
          </Avatar>
          <Brand className={cn(styles.brand3())} variant="outline" />
        </div>
        <div className={cn(styles.intro())}>
          <h1 className={cn(textStyles.h3())}>
            Works By <strong>Tony Ko</strong>
          </h1>
          <h2>
            <strong>Staff Software Engineer</strong> & <strong>UI Designer</strong> —
          </h2>
          <h3>
            Based in <em>Toronto, Canada.</em>
          </h3>
          <div className={cn(styles.cta())}>
            <Button size="lg" asChild>
              <Link href="/profile">
                Explore Profile <Icon icon={ArrowRightIcon} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
})
SectionHome.displayName = 'SectionHome'

export { SectionHome }
export type { SectionHomeProps, SectionHomeRef }
