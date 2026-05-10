'use client'

import { FC, useLayoutEffect, useRef } from 'react'
import { BanIcon, HandIcon, PlusIcon, PointerIcon, TextCursorIcon } from 'lucide-react'
import { cn, cva } from '@/utils/theme'

const styles = {
  ring: cva([
    'pointer-events-none fixed top-0 left-0 z-[9999]',
    'flex h-[72px] w-[72px] items-center justify-center',
    'rounded-full opacity-0',
    '[border:1px_solid_hsl(var(--foreground)/0.30)]',
    '[mix-blend-mode:exclusion]'
  ]),
  icon: cva(['absolute [color:hsl(var(--foreground)/0.60)]', 'transition-opacity duration-150'])
}

type CursorState = 'default' | 'pointer' | 'disabled' | 'text' | 'grab'

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

const LERP = 0.12
const SCALE: Record<CursorState, number> = {
  default: 1,
  pointer: 1.25,
  disabled: 1,
  text: 1,
  grab: 1.25
}

const Cursor: FC = () => {
  const ringRef = useRef<HTMLDivElement>(null)
  const defaultRef = useRef<HTMLDivElement>(null)
  const pointerRef = useRef<HTMLDivElement>(null)
  const disabledRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const grabRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const ring = ringRef.current
    const icons: Record<CursorState, HTMLDivElement | null> = {
      default: defaultRef.current,
      pointer: pointerRef.current,
      disabled: disabledRef.current,
      text: textRef.current,
      grab: grabRef.current
    }
    if (!ring || Object.values(icons).some((el) => !el)) return

    let rafId: number
    let mouseX = 0
    let mouseY = 0
    let x = 0
    let y = 0
    let scale = SCALE.default
    let targetScale = SCALE.default

    icons.default!.style.opacity = '1'

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseOver = (e: MouseEvent) => {
      const state = getCursorState(e.target as Element)
      targetScale = SCALE[state]
      for (const [key, el] of Object.entries(icons)) {
        el!.style.opacity = key === state ? '1' : '0'
      }
    }

    const tick = () => {
      x += (mouseX - x) * LERP
      y += (mouseY - y) * LERP
      scale += (targetScale - scale) * LERP
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })
    rafId = requestAnimationFrame(tick)
    ring.style.opacity = '1'

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div ref={ringRef} className={cn(styles.ring())}>
      <div ref={defaultRef} className={cn(styles.icon(), 'opacity-0')}>
        <PlusIcon size={16} strokeWidth={1} />
      </div>
      <div ref={pointerRef} className={cn(styles.icon(), 'opacity-0')}>
        <PointerIcon size={16} strokeWidth={1} />
      </div>
      <div ref={disabledRef} className={cn(styles.icon(), 'opacity-0')}>
        <BanIcon size={16} strokeWidth={1} />
      </div>
      <div ref={textRef} className={cn(styles.icon(), 'opacity-0')}>
        <TextCursorIcon size={16} strokeWidth={1} />
      </div>
      <div ref={grabRef} className={cn(styles.icon(), 'opacity-0')}>
        <HandIcon size={16} strokeWidth={1} />
      </div>
    </div>
  )
}

export { Cursor }
