import { forwardRef, HTMLAttributes } from 'react'
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

type ExampleRef = HTMLDivElement
type ExampleProps = HTMLAttributes<ExampleRef> & VariantProps<typeof styles.root>

const Example = forwardRef<ExampleRef, ExampleProps>((props, ref) => {
  const { className, ...rest } = props

  return <div ref={ref} className={cn(styles.root({ className }))} {...rest}></div>
})
Example.displayName = 'Example'

export { Example }
export type { ExampleProps, ExampleRef }
