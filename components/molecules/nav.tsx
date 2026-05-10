import Link from 'next/link'
import { forwardRef, HTMLAttributes } from 'react'
import { Button } from '@/components/atoms/button'
import { NavEntry } from '@/types/layout'
import { cn, cva, VariantProps } from '@/utils/theme'
import { Icon } from '../atoms/icon'

const styles = {
  root: cva('flex items-center gap-2'),
  icon: cva('xs:block hidden')
}

type NavRef = HTMLDivElement
type NavProps = HTMLAttributes<NavRef> &
  VariantProps<typeof styles.root> & {
    items: NavEntry[]
  }

const Nav = forwardRef<NavRef, NavProps>((props, ref) => {
  const { items, children, className, ...rest } = props

  return (
    <nav ref={ref} className={cn(styles.root({ className }))} {...rest}>
      {items.map((props, index) => {
        const { href, name, icon, isHidden, variant, ...rest } = props
        const isExternal = href && (!href.startsWith('/') || href.endsWith('.pdf'))
        if (isHidden) return null

        return href ? (
          <Button key={`nav-item-${index}`} variant={variant} {...rest} asChild>
            <Link href={href} target={isExternal ? '_blank' : undefined}>
              <Icon className={!!name ? cn(styles.icon()) : ''} icon={icon} />
              {name}
            </Link>
          </Button>
        ) : (
          <Icon key={`nav-item-${index}`} icon={icon} />
        )
      })}
      {children}
    </nav>
  )
})

Nav.displayName = 'Nav'

export { Nav }
export type { NavProps, NavRef }
