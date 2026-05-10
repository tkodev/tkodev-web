import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'
import { useAudio } from './audio'

const BGM_SRC = '/audio/an-empty-bus-justin-marshall-elias-main-version-36442-03-56.mp3'
const STORAGE_KEY = 'bgm-stopped'

const isStopped = () =>
  typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY) === 'true'

const useBgm = () => {
  const { audio, state, controls } = useAudio({ src: BGM_SRC, loop: true })
  const pathname = usePathname()
  const stateRef = useRef(state)
  useEffect(() => {
    stateRef.current = state
  })

  const tryPlay = useCallback(() => {
    if (!isStopped()) controls.play()
  }, [controls])

  // First user interaction beats browser autoplay policy
  useEffect(() => {
    const events = ['click', 'keydown', 'scroll'] as const
    let fired = false
    const handle = () => {
      if (fired) return
      fired = true
      events.forEach((e) => window.removeEventListener(e, handle))
      tryPlay()
    }
    events.forEach((e) => window.addEventListener(e, handle))
    return () => events.forEach((e) => window.removeEventListener(e, handle))
  }, [tryPlay])

  // Resume on navigation unless user stopped
  useEffect(() => {
    if (stateRef.current.paused) tryPlay()
  }, [pathname, tryPlay])

  const toggle = useCallback(() => {
    if (state.paused) {
      localStorage.removeItem(STORAGE_KEY)
      controls.play()
    } else {
      localStorage.setItem(STORAGE_KEY, 'true')
      controls.pause()
      controls.seek(0)
    }
  }, [controls, state.paused])

  return { audio, isPlaying: !state.paused, toggle }
}

export { useBgm }
