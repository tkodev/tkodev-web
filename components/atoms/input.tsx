import { ComponentProps, forwardRef } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva([
    'flex h-9 w-full px-3 py-1',
    'border-input bg-background rounded-full border shadow-sm transition-colors',
    'file:text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-1 focus-visible:outline-hidden',
    'disabled:cursor-not-allowed disabled:opacity-50'
  ])
}

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return <input ref={ref} type={type} className={cn(styles.root({ className }))} {...props} />
  }
)
Input.displayName = 'Input'

export { Input }
