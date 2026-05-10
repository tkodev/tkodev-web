import { forwardRef, HTMLAttributes } from 'react'
import { Base } from '@/components/sections/base'
import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'
import { Overlay } from '@/components/sections/overlay'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative h-full w-full')
}

type LayoutRef = HTMLDivElement
type LayoutProps = HTMLAttributes<LayoutRef> & VariantProps<typeof styles.root>

const Layout = forwardRef<LayoutRef, LayoutProps>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Base />
      <Header />
      {children}
      <Footer />
      <Overlay />
    </div>
  )
})
Layout.displayName = 'Layout'

export { Layout }
