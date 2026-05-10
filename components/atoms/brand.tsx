import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(''),
  path: cva('', {
    variants: {
      variant: {
        fill: 'fill-foreground stroke-transparent stroke-2',
        outline: 'stroke-foreground/15 fill-transparent stroke-2'
      }
    },
    defaultVariants: {
      variant: 'fill'
    }
  })
}

type BrandRef = SVGSVGElement
type BrandProps = HTMLAttributes<BrandRef> & VariantProps<typeof styles.path>

const Brand = forwardRef<BrandRef, BrandProps>((props, ref) => {
  const { variant, className, ...rest } = props

  return (
    <svg
      ref={ref}
      className={cn(styles.root({ className }))}
      fill="none"
      viewBox="0 0 673 218"
      xmlns="http://www.w3.org/2000/svg"
      height="218"
      width="673"
      {...rest}
    >
      <path
        className={cn(styles.path({ variant }))}
        d="M644.081 78.807V143.997C644.081 147.064 643.459 150.101 642.251 152.935C641.044 155.768 639.273 158.343 637.042 160.512C634.81 162.681 632.16 164.401 629.245 165.575C626.329 166.748 623.203 167.352 620.047 167.352H572.024C566.859 167.358 561.832 165.742 557.688 162.747L540.611 179.356C549.334 186.69 560.489 190.716 572.024 190.693H620.149C626.469 190.693 632.727 189.484 638.566 187.133C644.405 184.783 649.71 181.338 654.179 176.996C658.648 172.653 662.193 167.497 664.612 161.823C667.03 156.149 668.275 150.068 668.275 143.926V74.017C668.256 68.6158 667.269 63.2592 665.358 58.1871L644.081 78.807Z"
      />
      <path
        className={cn(styles.path({ variant }))}
        d="M547.932 139.207V74.017C547.924 70.9404 548.542 67.8927 549.75 65.0488C550.958 62.205 552.733 59.6211 554.971 57.4457C557.21 55.2702 559.869 53.546 562.795 52.3721C565.722 51.1982 568.858 50.5977 572.024 50.6052H620.15C625.31 50.598 630.334 52.2138 634.471 55.211L651.46 38.5875C642.735 31.258 631.581 27.2325 620.048 27.2501H572.024C559.26 27.2501 547.019 32.1773 537.994 40.9478C528.969 49.7183 523.898 61.6136 523.898 74.017V144.04C523.899 149.42 524.851 154.76 526.713 159.827L547.932 139.207Z"
      />
      <path
        className={cn(styles.path({ variant }))}
        d="M401.484 151.211C405.992 155.589 408.526 161.528 408.528 167.721V190.75H384.494V167.721L341.225 125.687L358.229 109.163L401.484 151.211Z"
      />
      <path
        className={cn(styles.path({ variant }))}
        d="M408.528 27.25L288.345 144.04L408.528 27.25H374.534L288.345 111.005V27.25H264.312V190.75H288.345V144.04"
      />
      <path
        className={cn(styles.path({ variant }))}
        d="M88.8574 190.75H64.8092V50.6051H4.7251V27.25H148.941V50.6051H88.8574V190.75Z"
      />
    </svg>
  )
})
Brand.displayName = 'Brand'

export { Brand }
export type { BrandProps, BrandRef }
