'use client'

import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'
import { MusicIcon, PauseIcon, PlayIcon, SunMoonIcon } from 'lucide-react'
import { useTheme } from '@/hooks/theme'
import { useBgmContext } from '@/providers/bgm'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'

const styles = {
  root: cva(['z-10 h-auto w-full', 'fixed bottom-0 left-0']),
  fade: cva([
    'pointer-events-none h-[96px] w-full',
    'bg-background gradient-mask-t-10 fixed -bottom-[2px] left-0'
  ]),
  blur: cva(['pointer-events-none h-24 w-full', 'fixed -bottom-0.5 left-0']),
  container: cva([
    'fixed bottom-4 left-1/2 mx-auto -translate-x-1/2 px-4',
    'z-10 h-auto w-full max-w-[1280px]'
  ]),
  bar: cva('animate-slide-up flex h-16 items-center justify-between px-2', {
    variants: {
      variant: {
        bar: ['bg-background/30 rounded-full border shadow-md', 'backdrop-blur-lg backdrop-filter'],
        flat: 'rounded-none border-none bg-transparent shadow-none'
      }
    },
    defaultVariants: {
      variant: 'flat'
    }
  }),

  left: cva('flex h-full items-center gap-2 px-2'),
  right: cva('no-scrollbar flex h-full items-center gap-2 overflow-x-auto px-2'),

  bgm: cva('hidden sm:flex')
}

type FooterProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.bar>

const Footer: FC<FooterProps> = (props) => {
  const { variant, className, ...rest } = props

  const { isPlaying, toggle } = useBgmContext()
  const { handleThemeModeToggle } = useTheme()

  return (
    <footer className={cn(styles.root({ className }))} {...rest}>
      {[
        { blur: 'backdrop-blur-[2px]', stop: '0%' },
        { blur: 'backdrop-blur-[4px]', stop: '33%' },
        { blur: 'backdrop-blur-[8px]', stop: '66%' },
        { blur: 'backdrop-blur-[16px]', stop: '95%' }
      ].map(({ blur, stop }) => (
        <div
          key={stop}
          className={cn(styles.blur(), blur)}
          style={{ maskImage: `linear-gradient(to bottom, transparent ${stop}, black)` }}
        />
      ))}
      <div className={cn(styles.fade())} />
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar({ variant }))}>
          <div className={cn(styles.left())}>
            <Button size="icon" variant={isPlaying ? 'secondary' : 'ghost'} onClick={toggle}>
              <Icon icon={isPlaying ? PauseIcon : PlayIcon} />
            </Button>
            <Button className={cn(styles.bgm())} size="none" variant="link" asChild>
              <Link
                href="https://uppbeat.io/track/justin-marshall-elias/an-empty-bus"
                target="_blank"
              >
                <Icon icon={MusicIcon} />
                An Empty Bus - Justin M. Elias
              </Link>
            </Button>
          </div>
          <div className={cn(styles.right())}>
            <Button size="icon" variant="ghost" onClick={handleThemeModeToggle}>
              <Icon icon={SunMoonIcon} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
