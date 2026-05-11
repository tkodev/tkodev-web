'use client'

import { FC, useLayoutEffect, useRef } from 'react'
import { BanIcon, HandIcon, PlusIcon, PointerIcon, TextCursorIcon } from 'lucide-react'
import { cn, cva } from '@/utils/theme'

const styles = {
  ring: cva([
    'border-foreground/30 pointer-events-none fixed top-0 left-0 z-9999 border',
    'flex h-[72px] w-[72px] items-center justify-center',
    'rounded-full opacity-0',
    'mix-blend-exclusion'
  ]),
  wave: cva([
    'border-foreground/30 pointer-events-none fixed top-0 left-0 z-9999 -translate-x-1/2 -translate-y-1/2 border',
    'h-[72px] w-[72px] rounded-full opacity-0',
    'mix-blend-exclusion'
  ]),
  centerPointer: cva([
    'pointer-events-none fixed top-0 left-0 z-9999',
    'flex items-center justify-center opacity-0',
    'mix-blend-exclusion'
  ]),
  icon: cva(
    ['text-background dark:text-foreground absolute opacity-0', 'transition-opacity duration-150'],
    {
      variants: {
        offset: {
          none: '',
          pointer: 'translate-x-[15%] translate-y-[40%]'
        }
      },
      defaultVariants: { offset: 'none' }
    }
  )
}

type CursorState = 'default' | 'pointer' | 'disabled' | 'text' | 'grab'

type CursorProps = {
  disablePointer?: boolean
}

const getCursorState = (el: Element | null): CursorState => {
  if (!el || el === document.documentElement) return 'default'
  const tag = el.tagName.toLowerCase()
  const computed = getComputedStyle(el).cursor
  if (computed === 'not-allowed') return 'disabled'
  if (computed === 'text') return 'text'
  if (computed === 'grab' || computed === 'grabbing') return 'grab'
  if (['a', 'button', 'input', 'select', 'textarea'].includes(tag)) return 'pointer'
  if (el.getAttribute('role') === 'button') return 'pointer'
  if (computed === 'pointer') return 'pointer'
  return getCursorState(el.parentElement)
}

const LERP = 0.1 // higher is faster
const LERP_POINTER = 1
const SCALE: Record<CursorState, number> = {
  default: 1,
  pointer: 1.25,
  disabled: 1,
  text: 1,
  grab: 1.25
}

const Cursor: FC<CursorProps> = ({ disablePointer = false }) => {
  const ringRef = useRef<HTMLDivElement>(null)
  const waveRef = useRef<HTMLDivElement>(null)
  const centerPointerRef = useRef<HTMLDivElement>(null)
  const defaultRef = useRef<HTMLDivElement>(null)
  const pointerRef = useRef<HTMLDivElement>(null)
  const disabledRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const grabRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const ring = ringRef.current
    const wave = waveRef.current
    const centerPointer = centerPointerRef.current
    const icons: Record<CursorState, HTMLDivElement | null> = {
      default: defaultRef.current,
      pointer: pointerRef.current,
      disabled: disabledRef.current,
      text: textRef.current,
      grab: grabRef.current
    }
    const hasIcons = centerPointer && Object.values(icons).every(Boolean)
    if (!ring || !wave) return

    let rafId: number
    let mouseX = 0
    let mouseY = 0
    let x = 0
    let y = 0
    let px = 0
    let py = 0
    let scale = SCALE.default
    let targetScale = SCALE.default

    if (hasIcons) icons.default!.style.opacity = '1'

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseOver = (e: MouseEvent) => {
      const state = getCursorState(e.target as Element)
      targetScale = SCALE[state]
      if (hasIcons) {
        for (const [key, el] of Object.entries(icons)) {
          el!.style.opacity = key === state ? '1' : '0'
        }
      }
    }

    const tick = () => {
      x += (mouseX - x) * LERP
      y += (mouseY - y) * LERP
      scale += (targetScale - scale) * LERP
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`

      if (hasIcons) {
        px += (mouseX - px) * LERP_POINTER
        py += (mouseY - py) * LERP_POINTER
        centerPointer!.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%)`
      }

      rafId = requestAnimationFrame(tick)
    }

    const onMouseDown = (e: MouseEvent) => {
      wave.style.top = `${e.clientY}px`
      wave.style.left = `${e.clientX}px`
      wave.style.animation = 'none'
      void wave.offsetHeight // force reflow to restart animation
      wave.style.animation = 'var(--animate-cursor-wave)'
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })
    window.addEventListener('mousedown', onMouseDown, { passive: true })
    rafId = requestAnimationFrame(tick)
    ring.style.opacity = '1'
    if (hasIcons) centerPointer!.style.opacity = '1'

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mousedown', onMouseDown)
      cancelAnimationFrame(rafId)
    }
  }, [disablePointer])

  return (
    <>
      <div ref={ringRef} className={cn(styles.ring())} />
      <div ref={waveRef} className={cn(styles.wave())} />
      {!disablePointer && (
        <div ref={centerPointerRef} className={cn(styles.centerPointer())}>
          <div ref={defaultRef} className={cn(styles.icon())}>
            <PlusIcon size={16} strokeWidth={2} />
          </div>
          <div ref={pointerRef} className={cn(styles.icon({ offset: 'pointer' }))}>
            <PointerIcon size={16} strokeWidth={2} />
          </div>
          <div ref={disabledRef} className={cn(styles.icon())}>
            <BanIcon size={16} strokeWidth={2} />
          </div>
          <div ref={textRef} className={cn(styles.icon())}>
            <TextCursorIcon size={16} strokeWidth={2} />
          </div>
          <div ref={grabRef} className={cn(styles.icon())}>
            <HandIcon size={16} strokeWidth={2} />
          </div>
        </div>
      )}
    </>
  )
}

export { Cursor }
