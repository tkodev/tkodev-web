import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn, cva } from '@/utils/theme'

const styles = {
  avatar: cva(
    'bg-muted relative flex aspect-square h-full w-full shrink-0 items-center justify-center overflow-hidden rounded-full'
  ),
  avatarImage: cva('h-full w-full'),
  avatarFallback: cva('bg-muted flex h-full w-full items-center justify-center rounded-full')
}

const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root ref={ref} className={cn(styles.avatar({ className }))} {...props} />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn(styles.avatarImage({ className }))} {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(styles.avatarFallback({ className }))}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
