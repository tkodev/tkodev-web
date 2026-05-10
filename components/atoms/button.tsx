import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/theme'

const styles = {
  root: cva(
    [
      'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors',
      'focus-visible:ring-ring focus-visible:ring-1 focus-visible:outline-hidden',
      'disabled:pointer-events-none disabled:scale-100 disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
    ],
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs',
          destructive:
            'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-xs',
          outline:
            'border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-xs',
          secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
          xs: 'h-7 px-2',
          sm: 'h-8 px-3',
          default: 'h-9 px-4 py-2',
          lg: 'h-10 px-8',
          xl: 'h-12 px-10',
          icon: 'h-9 w-9',
          none: 'h-9'
        },
        isHover: {
          true: 'transition-all duration-300 hover:scale-105',
          false: ''
        }
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
        isHover: false
      }
    }
  )
}

type ButtonRef = HTMLButtonElement
type ButtonProps = ButtonHTMLAttributes<ButtonRef> &
  VariantProps<typeof styles.root> & {
    asChild?: boolean
  }

const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const { variant, size, asChild = false, className, ...rest } = props
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      className={cn(styles.root({ variant, size, isHover: variant !== 'link', className }))}
      {...rest}
    />
  )
})
Button.displayName = 'Button'

export { Button }
export type { ButtonProps, ButtonRef }
