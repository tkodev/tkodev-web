import { forwardRef, HTMLAttributes } from 'react'
import { Cursor } from '@/components/atoms/cursor'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('', {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
        xl: ''
      }
    },
    defaultVariants: {
      size: 'sm'
    }
  })
}

type OverlayRef = HTMLDivElement
type OverlayProps = HTMLAttributes<OverlayRef> & VariantProps<typeof styles.root>

const Overlay = forwardRef<OverlayRef, OverlayProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Cursor />
    </div>
  )
})
Overlay.displayName = 'Overlay'

export { Overlay }
export type { OverlayProps, OverlayRef }
