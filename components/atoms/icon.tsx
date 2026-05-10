import { FC, HTMLAttributes } from 'react'
import { SvgComponent } from '@/types/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('', {
    variants: {
      size: {
        xs: 'h-[20px] w-[20px]',
        sm: 'h-[24px] w-[24px]',
        md: 'h-[32px] w-[32px]',
        lg: 'h-[40px] w-[40px]',
        xl: 'h-[64px] w-[64px]',
        '2xl': 'h-[96px] w-[96px]',
        '3xl': 'h-[128px] w-[128px]'
      }
    },
    defaultVariants: {
      size: 'sm'
    }
  })
}

type IconProps = HTMLAttributes<SVGElement> &
  VariantProps<typeof styles.root> & {
    icon?: SvgComponent | FC
    alt?: string
  }

const Icon: FC<IconProps> = (props) => {
  const { icon: Icon, alt, size, className, ...rest } = props

  if (!Icon) return null

  return <Icon className={cn(styles.root({ size, className }))} title={alt} {...rest} />
}

export { Icon }
export type { IconProps }
