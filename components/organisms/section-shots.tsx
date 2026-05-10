import Link from 'next/link'
import { forwardRef, HTMLAttributes } from 'react'
import { CameraIcon, MoveRightIcon } from 'lucide-react'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Hypertext } from '@/components/atoms/hypertext'
import { Icon } from '@/components/atoms/icon'
import { Media } from '@/components/atoms/media'
import { Section } from '@/components/molecules/section'
import { DialogLightbox } from '@/components/organisms/dialog-lightbox'
import { shotEntries } from '@/constants/shots'
import { textStyles } from '@/constants/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('flex flex-col justify-center gap-16'),

  content: cva([
    'flex flex-col items-center justify-center gap-8',
    'lg:flex-row lg:items-center lg:justify-between'
  ]),
  cta: cva('flex justify-center'),

  icon: cva('w-auto'),
  text: cva('flex flex-col gap-4 lg:order-first lg:w-[65%]'),

  grid: cva('grid grid-cols-3 gap-2 md:gap-4 lg:gap-8'),
  media: cva('flex flex-col gap-4')
}

type SectionShotsRef = HTMLDivElement
type SectionShotsProps = HTMLAttributes<SectionShotsRef> & VariantProps<typeof styles.root>

const SectionShots = forwardRef<SectionShotsRef, SectionShotsProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg attach="local" position="top" size="repeat" variant="texture" />}
      height="auto"
      {...rest}
    >
      <div className={cn(styles.content())}>
        <div className={cn(styles.icon())}>
          <Icon icon={CameraIcon} size="3xl" />
        </div>
        <div className={cn(styles.text())}>
          <h1 className={cn(textStyles.h1())}>
            <Hypertext text="Shots." />
          </h1>
          <h2 className={cn(textStyles.h2())}>Capturing Stories Through the Lens.</h2>
          <p>
            Beyond engineering & design, photography allows me to explore creativity and tell
            stories from unique perspectives. Whether it’s the vibrancy of city streets, the
            serenity of landscapes, or the depth of human emotions in portraits, my work reflects a
            passion for capturing life’s fleeting moments with authenticity and style.
          </p>
        </div>
      </div>
      <div className={cn(styles.grid())}>
        {shotEntries.map((mediaEntry, index) => {
          const key = `media-${index}`
          return (
            <DialogLightbox key={key} currentIndex={index} mediaEntries={shotEntries}>
              <button className={cn(styles.media())}>
                <Media aspect="square" fill="cover" mediaEntry={mediaEntry} isHover />
              </button>
            </DialogLightbox>
          )
        })}
      </div>
      <div className={cn(styles.cta())}>
        <Button size="lg" asChild>
          <Link href="/works">
            Explore Projects <Icon icon={MoveRightIcon} />
          </Link>
        </Button>
      </div>
    </Section>
  )
})
SectionShots.displayName = 'SectionShots'

export { SectionShots }
export type { SectionShotsProps, SectionShotsRef }
