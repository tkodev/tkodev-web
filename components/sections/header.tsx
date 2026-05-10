import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'
import {
  CameraIcon,
  DotIcon,
  DraftingCompassIcon,
  NotebookPenIcon,
  ScanFaceIcon
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar'
import { Logo } from '@/components/atoms/logo'
import { NavEntry } from '@/types/layout'
import { cn, cva, type VariantProps } from '@/utils/theme'
import { Nav } from '../molecules/nav'

const styles = {
  root: cva(['z-10 h-auto w-full', 'fixed top-0 left-0']),
  fade: cva([
    'pointer-events-none h-[96px] w-full',
    'bg-background gradient-mask-b-10 fixed -top-[2px] left-0 backdrop-blur-xl backdrop-filter'
  ]),
  container: cva([
    'h-auto w-full max-w-[1280px]',
    'fixed top-4 left-1/2 mx-auto -translate-x-1/2 px-4'
  ]),
  bar: cva('animate-slide-down flex h-16 w-full items-center justify-between px-2', {
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

  thumb: cva('xs:block hidden h-10 w-10'),
  logo: cva('mx-2 sm:mx-4 md:mx-8'),
  intro: cva('hidden sm:block')
}

const isSearchEnabled = false
const navItems: NavEntry[] = [
  { href: '/profile', name: 'Profile', icon: ScanFaceIcon, variant: 'ghost' },
  { href: '/works', name: 'Works', icon: DraftingCompassIcon, variant: 'ghost' },
  { href: '/shots', name: 'Shots', icon: CameraIcon, variant: 'ghost' },
  {
    href: '/blog',
    name: 'Blog',
    icon: NotebookPenIcon,
    variant: 'ghost',
    isHidden: !isSearchEnabled
  },
  { icon: DotIcon, isHidden: !isSearchEnabled }
]

type HeaderProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.bar>

const Header: FC<HeaderProps> = (props) => {
  const { variant, className, ...rest } = props

  return (
    <header className={cn(styles.root({ className }))} {...rest}>
      <div className={cn(styles.fade())} />
      <div className={cn(styles.container())}>
        <div className={cn(styles.bar({ variant }))}>
          <div className={cn(styles.left())}>
            <Link className={cn(styles.thumb())} href="/">
              <Avatar>
                <AvatarImage alt="Tony Ko" src="/images/tkodev/dp-thumb.jpg" />
                <AvatarFallback>tko</AvatarFallback>
              </Avatar>
            </Link>
            <Link className={cn(styles.logo())} href="/">
              <Logo />
            </Link>
          </div>
          <div className={cn(styles.right())}>
            <Nav items={navItems} />
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
