import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'
import { FileIcon } from 'lucide-react'
import { Icon } from '@/components/atoms/icon'
import { Video } from '@/components/atoms/video'
import { MediaEntry } from '@/types/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(
    'bg-muted relative flex h-auto w-full items-center justify-center overflow-hidden rounded-xl border shadow-md'
  ),
  icon: cva('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15'),
  comp: cva('relative h-auto max-h-full w-full max-w-full', {
    variants: {
      aspect: {
        video: 'aspect-video',
        square: 'aspect-square'
      },
      fill: {
        contain: 'object-contain',
        cover: 'object-cover'
      },
      isHover: {
        true: 'transition-all duration-1000 hover:scale-105 hover:contrast-[1.05]'
      }
    },
    defaultVariants: {
      fill: 'cover'
    }
  })
}

type MediaRef = HTMLImageElement
type MediaProps = HTMLAttributes<MediaRef> &
  VariantProps<typeof styles.comp> & {
    mediaEntry: MediaEntry
    isIconVisible?: boolean
  }

const Media: FC<MediaProps> = (props) => {
  const { mediaEntry, aspect, fill, isHover, isIconVisible = true, className } = props

  const { type, frameId: _, ...mediaProps } = mediaEntry ?? {}

  const Comp = type === 'image' ? Image : Video

  return (
    <div className={cn(styles.root({ className }))}>
      {isIconVisible && <Icon className={cn(styles.icon())} icon={FileIcon} size="xl" />}
      <Comp
        className={cn(styles.comp({ aspect, fill, isHover }))}
        {...mediaProps}
        alt={mediaProps.alt}
      />
    </div>
  )
}
Media.displayName = 'Media'

export { Media }
export type { MediaProps, MediaRef }
