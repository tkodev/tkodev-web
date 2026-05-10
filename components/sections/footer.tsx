'use client'

import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'
import {
  DotIcon,
  FileUserIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MusicIcon,
  PauseIcon,
  PlayIcon,
  SunMoonIcon
} from 'lucide-react'
import { profileEntries } from '@/constants/profile'
import { useTheme } from '@/hooks/theme'
import { useBgmContext } from '@/providers/bgm'
import { NavEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Button } from '../atoms/button'
import { Icon } from '../atoms/icon'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva(['z-10 h-auto w-full', 'fixed bottom-0 left-0']),
  fade: cva([
    'pointer-events-none h-[96px] w-full',
    'bg-background gradient-mask-t-10 fixed -bottom-[2px] left-0 backdrop-blur-xl backdrop-filter'
  ]),
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

const navItems: NavEntry[] = [
  {
    href: profileEntries.tony.linkedin,
    icon: LinkedinIcon,
    variant: 'ghost',
    size: 'icon'
  },
  {
    href: profileEntries.tony.github,
    icon: GithubIcon,
    variant: 'ghost',
    size: 'icon'
  },
  {
    href: `mailto:${profileEntries.tony.email}`,
    icon: MailIcon,
    variant: 'ghost',
    size: 'icon'
  },
  {
    href: '/files/tony-ko-resume-2026.pdf',
    icon: FileUserIcon,
    variant: 'ghost',
    size: 'icon'
  },
  { icon: DotIcon }
]

type FooterProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.bar>

const Footer: FC<FooterProps> = (props) => {
  const { variant, className, ...rest } = props

  const { isPlaying, toggle } = useBgmContext()
  const { handleThemeModeToggle } = useTheme()

  return (
    <footer className={cn(styles.root({ className }))} {...rest}>
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
            <Nav items={navItems}>
              <Button size="icon" variant="ghost" onClick={handleThemeModeToggle}>
                <Icon icon={SunMoonIcon} />
              </Button>
            </Nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
