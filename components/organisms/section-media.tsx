import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Media } from '@/components/atoms/media'
import { Section } from '@/components/molecules/section'
import { DialogMedia } from '@/components/organisms/dialog-media'
import { MediaEntry } from '@/types/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('grid gap-16 md:gap-8 lg:gap-16', {
    variants: {
      isDoubleCol: {
        true: 'md:grid-cols-2',
        false: 'md:grid-cols-1'
      }
    }
  }),

  content: cva([
    'flex flex-col items-center justify-center gap-8',
    'lg:flex-row lg:items-center lg:justify-between'
  ]),

  text: cva('flex flex-col gap-4 lg:order-first lg:w-[65%]'),

  tableHead: cva('w-[20%]'),
  tableRoles: cva('capitalize')
}

type SectionMediaRef = HTMLDivElement
type SectionMediaProps = HTMLAttributes<SectionMediaRef> &
  VariantProps<typeof styles.root> & {
    mediaEntries: MediaEntry[]
  }

const SectionMedia = forwardRef<SectionMediaRef, SectionMediaProps>((props, ref) => {
  const { mediaEntries, className, ...rest } = props

  if (!mediaEntries.length) return null

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ isDoubleCol: mediaEntries.length > 1, className }))}
      bg={<Bg attach="local" position="top" size="repeat" variant="texture" />}
      height="auto"
      {...rest}
    >
      {mediaEntries.map((mediaEntry, index) => (
        <DialogMedia key={`media-${index}`} mediaEntry={mediaEntry}>
          <button>
            <Media aspect="video" mediaEntry={mediaEntry} isHover />
          </button>
        </DialogMedia>
      ))}
    </Section>
  )
})
SectionMedia.displayName = 'SectionMedia'

export { SectionMedia }
export type { SectionMediaProps, SectionMediaRef }
