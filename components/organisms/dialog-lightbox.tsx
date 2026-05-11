'use client'

import { forwardRef, HTMLAttributes, useCallback, useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { Icon } from '@/components/atoms/icon'
import { Markdown } from '@/components/atoms/markdown'
import { Media } from '@/components/atoms/media'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogProps,
  DialogTitle,
  DialogTrigger
} from '@/components/molecules/dialog'
import { MediaEntry } from '@/types/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(''),

  content: cva([
    'h-screen w-screen max-w-screen',
    'bg-background/60 backdrop-blur-md',
    'grid grid-rows-[auto_1fr_auto]',
    'border-none shadow-none'
  ]),

  header: cva('flex w-full max-w-screen items-center justify-center gap-4 border-b p-8'),
  stage: cva('relative flex min-h-0 w-full items-center justify-center p-8'),
  footer: cva('max-h-48 overflow-y-auto border-t p-8 pb-4'),

  thumbnails: cva('flex gap-2 overflow-x-auto'),
  thumb: cva('w-16 shrink-0 cursor-pointer overflow-hidden opacity-50 transition-opacity', {
    variants: {
      isActive: {
        true: 'opacity-100'
      }
    }
  }),

  counter: cva(
    'text-muted-foreground bg-muted/80 absolute top-12 left-1/2 z-50 min-w-16 -translate-x-1/2 rounded-md p-2 text-center text-sm'
  ),

  nav: cva('absolute top-1/2 z-50 -translate-y-1/2', {
    variants: {
      side: {
        left: 'left-12 md:left-16',
        right: 'right-12 md:right-16'
      }
    }
  }),
  media: cva('h-auto max-h-full w-auto max-w-full')
}

type DialogLightboxRef = HTMLButtonElement
type DialogLightboxProps = HTMLAttributes<DialogLightboxRef> &
  VariantProps<typeof styles.root> &
  DialogProps & {
    mediaEntries: MediaEntry[]
    currentIndex?: number
  }

const DialogLightbox = forwardRef<DialogLightboxRef, DialogLightboxProps>((props, ref) => {
  const { mediaEntries, currentIndex: initialIndex = 0, className, children, ...rest } = props

  const [index, setIndex] = useState(initialIndex)

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), [])
  const next = useCallback(
    () => setIndex((i) => Math.min(mediaEntries.length - 1, i + 1)),
    [mediaEntries.length]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  const current = mediaEntries[index]
  const currentAlt = current.alt.split('🔖 Hashtags')[0].replace('📸 Equipment', '')

  return (
    <Dialog {...rest}>
      <DialogTrigger ref={ref} className={cn(styles.root({ className }))} asChild>
        {children}
      </DialogTrigger>
      <DialogContent className={cn(styles.content())} isAnimated isCloseVisible>
        <div className={cn(styles.header())}>
          <div className={cn(styles.thumbnails())}>
            {mediaEntries.map((entry, i) => (
              <button
                key={i}
                className={cn(styles.thumb({ isActive: i === index }))}
                onClick={() => setIndex(i)}
              >
                <Media aspect="square" fill="cover" isIconVisible={false} mediaEntry={entry} />
              </button>
            ))}
          </div>
        </div>
        <div className={cn(styles.stage())}>
          {index > 0 && (
            <Button
              className={cn(styles.nav({ side: 'left' }))}
              size="xs"
              variant="secondary"
              onClick={prev}
            >
              <Icon icon={ChevronLeftIcon} />
            </Button>
          )}

          {index < mediaEntries.length - 1 && (
            <Button
              className={cn(styles.nav({ side: 'right' }))}
              size="xs"
              variant="secondary"
              onClick={next}
            >
              <Icon icon={ChevronRightIcon} />
            </Button>
          )}

          <span className={cn(styles.counter())}>
            {index + 1} / {mediaEntries.length}
          </span>

          {current && <Media className={cn(styles.media())} fill="contain" mediaEntry={current} />}
        </div>
        <div className={cn(styles.footer())}>
          <DialogTitle className="sr-only">Media Preview</DialogTitle>
          <DialogDescription asChild>
            <Markdown>{currentAlt}</Markdown>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  )
})
DialogLightbox.displayName = 'DialogLightbox'

export { DialogLightbox }
export type { DialogLightboxProps, DialogLightboxRef }
