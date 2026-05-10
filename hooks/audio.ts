import { useCallback } from 'react'
import { useAudio as useRawAudio } from 'react-use'

type UseAudioProps = {
  src: string
  loop?: boolean
  autoPlay?: boolean
}

const useAudio = (props: UseAudioProps) => {
  const { src, loop, autoPlay } = props

  const [audio, state, controls] = useRawAudio({
    src,
    loop,
    autoPlay
  })
  const handleAudioToggle = useCallback(() => {
    if (state.paused) {
      controls.play()
    } else {
      controls.pause()
      controls.seek(0)
    }
  }, [controls, state])

  return {
    audio,
    state,
    controls,
    handleAudioToggle
  }
}

export { useAudio }
export type { UseAudioProps }
