import { forwardRef, HTMLAttributes } from 'react'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('h-full w-full bg-center', {
    variants: {
      variant: {
        gradient: [
          'bg-[url(/images/bg/gradient/light-alt-y@2x.png)] md:bg-[url(/images/bg/gradient/light-x@2x.png)]',
          'dark:bg-[url(/images/bg/gradient/dark-alt-y@2x.png)] dark:md:bg-[url(/images/bg/gradient/dark-x@2x.png)]',
          'opacity-30'
        ],
        sand: [
          'bg-[url(/images/bg/sand/light-y@1x.jpg)] md:bg-[url(/images/bg/sand/light-x@1x.jpg)]',
          'dark:bg-[url(/images/bg/sand/dark-y@1x.jpg)] dark:md:bg-[url(/images/bg/sand/dark-x@1x.jpg)]',
          'opacity-50'
        ],
        fade: [
          'bg-[url(/images/bg/fade/light-alt-y@2x.png)] md:bg-[url(/images/bg/fade/light-x@1x.png)]',
          'dark:bg-[url(/images/bg/fade/dark-alt-y@2x.png)] dark:md:bg-[url(/images/bg/fade/dark-x@1x.png)]'
        ],
        texture: [
          'bg-[url(/images/bg/texture/light-y@1x.png)] md:bg-[url(/images/bg/texture/light-x@1x.png)]',
          'dark:bg-[url(/images/bg/texture/dark-y@1x.png)] dark:md:bg-[url(/images/bg/texture/dark-x@1x.png)]'
        ],
        noise: ['bg-[url(/images/bg/noise/noise@1x.gif)]', 'opacity-2.5']
      },
      size: {
        cover: 'bg-cover',
        contain: 'bg-contain',
        repeat: 'bg-repeat'
      },
      attach: {
        local: 'bg-local',
        fixed: 'bg-fixed',
        scroll: 'bg-scroll'
      },
      position: {
        center: 'bg-center',
        top: 'bg-top'
      },
      overlay: {
        true: 'pointer-events-none fixed top-0 left-0 z-50'
      }
    },
    defaultVariants: {
      variant: 'sand',
      size: 'cover',
      attach: 'local',
      position: 'center',
      overlay: false
    }
  })
}

type BgRef = HTMLDivElement
type BgProps = HTMLAttributes<BgRef> & VariantProps<typeof styles.root>

const Bg = forwardRef<BgRef, BgProps>((props, ref) => {
  const { variant, size, attach, position, overlay, className, ...rest } = props

  return (
    <div
      ref={ref}
      className={cn(styles.root({ variant, size, attach, position, overlay, className }))}
      {...rest}
    />
  )
})
Bg.displayName = 'Bg'

export { Bg }
export type { BgProps, BgRef }
