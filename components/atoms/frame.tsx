import Image from 'next/image'
import { forwardRef, HTMLAttributes } from 'react'
import { Media } from '@/components/atoms/media'
import { frameEntries } from '@/constants/media'
import { MediaEntry } from '@/types/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('relative w-full'),
  lcd: cva('absolute left-1/2 -translate-x-1/2 scale-[101%] overflow-hidden bg-black', {
    variants: {
      frameId: {
        mobile: 'rounded-lg',
        desktop: 'rounded-none'
      }
    }
  }),
  screen: cva('h-full w-full'),
  device: cva('pointer-events-none relative top-0 left-1/2 -translate-x-1/2')
}

type FrameRef = HTMLDivElement
type FrameProps = HTMLAttributes<FrameRef> &
  VariantProps<typeof styles.lcd> & {
    mediaEntry: MediaEntry
  }

const Frame = forwardRef<FrameRef, FrameProps>((props, ref) => {
  const { mediaEntry, className, ...rest } = props
  const { frameId = 'desktop' } = mediaEntry

  const frameEntry = frameEntries[frameId]
  const { screenTop, screenWidth, screenHeight, ...frameProps } = frameEntry

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <div
        className={cn(styles.lcd({ frameId }))}
        style={{
          top: `${(screenTop / frameEntry.height) * 100}%`,
          height: `${(screenHeight / frameEntry.height) * 100}%`,
          aspectRatio: `${screenWidth}/${screenHeight}`
        }}
      >
        <Media className={cn(styles.screen())} fill="contain" mediaEntry={mediaEntry} isHover />
      </div>
      <Image className={cn(styles.device())} {...frameProps} alt={frameEntry.alt} />
    </div>
  )
})
Frame.displayName = 'Frame'

export { Frame }
export type { FrameProps, FrameRef }
