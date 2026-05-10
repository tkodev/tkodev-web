import { forwardRef, HTMLAttributes } from 'react'
import { VideoMediaEntry } from '@/types/media'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('')
}

type VideoRef = HTMLVideoElement
type VideoProps = HTMLAttributes<VideoRef> &
  VariantProps<typeof styles.root> &
  Omit<VideoMediaEntry, 'type' | 'frameId'>

const Video = forwardRef<VideoRef, VideoProps>((props, ref) => {
  const { src, mime = 'video/mp4', track, lang, className, ...rest } = props

  return (
    <video ref={ref} className={cn(styles.root({ className }))} {...rest} autoPlay muted>
      <source type={mime} src={src} />
      {track && <track kind="subtitles" srcLang={lang} src={track} />}
      Your browser does not support the video tag.
    </video>
  )
})
Video.displayName = 'Video'

export { Video }
export type { VideoProps, VideoRef }
