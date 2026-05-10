import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
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

type BaseRef = HTMLDivElement
type BaseProps = HTMLAttributes<BaseRef> & VariantProps<typeof styles.root>

const Base = forwardRef<BaseRef, BaseProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Bg />
    </div>
  )
})
Base.displayName = 'Base'

export { Base }
export type { BaseProps, BaseRef }
