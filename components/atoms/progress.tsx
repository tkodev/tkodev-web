'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn, cva } from '@/utils/theme'

const styles = {
  progress: cva(
    'border-secondary bg-secondary relative h-2 w-full overflow-hidden rounded-full border'
  ),
  indicator: cva('bg-primary h-full w-full flex-1 rounded-full transition-all')
}

const Progress = forwardRef<
  ElementRef<typeof ProgressPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} className={cn(styles.progress({ className }))} {...props}>
    <ProgressPrimitive.Indicator
      className={cn(styles.indicator())}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
