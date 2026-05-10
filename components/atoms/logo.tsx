'use client'

import Image from 'next/image'
import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative h-auto w-[72px]'),
  img: cva('absolute top-0 left-0 h-full w-full', {
    variants: {
      variant: {
        light: 'block dark:hidden',
        dark: 'hidden dark:block'
      }
    }
  }),
  baseImg: cva('opacity-0')
}

type LogoRef = HTMLImageElement
type LogoProps = HTMLAttributes<LogoRef> & VariantProps<typeof styles.root>

const Logo = forwardRef<LogoRef, LogoProps>((props, ref) => {
  const { className, ...rest } = props

  const imageProps = {
    width: 192,
    height: 64
  }
  const altString = 'Tko.dev Logo'

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Image
        className={cn(styles.img({ variant: 'light' }))}
        alt={altString}
        src="/images/logo/logo-light.svg"
        {...imageProps}
      />
      <Image
        className={cn(styles.img({ variant: 'dark' }))}
        alt={altString}
        src="/images/logo/logo-dark.svg"
        {...imageProps}
      />
      <Image
        className={cn(styles.baseImg())}
        alt={altString}
        src="/images/logo/logo-dark.svg"
        {...imageProps}
      />
    </div>
  )
})
Logo.displayName = 'Logo'

export { Logo }
export type { LogoProps, LogoRef }
