'use client'

import { FC, useLayoutEffect, useRef } from 'react'

const LERP = 0.12
const SCALE_DEFAULT = 1
const SCALE_HOVER = 1.25

const isClickable = (el: Element | null): boolean => {
  if (!el || el === document.documentElement) return false
  const tag = el.tagName.toLowerCase()
  if (['a', 'button', 'input', 'select', 'textarea'].includes(tag)) return true
  if (el.getAttribute('role') === 'button') return true
  if (getComputedStyle(el).cursor === 'pointer') return true
  return isClickable(el.parentElement)
}

const Cursor: FC = () => {
  const ringRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const ring = ringRef.current
    if (!ring) return

    let rafId: number
    let mouseX = 0
    let mouseY = 0
    let x = 0
    let y = 0
    let scale = SCALE_DEFAULT
    let targetScale = SCALE_DEFAULT

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseOver = (e: MouseEvent) => {
      targetScale = isClickable(e.target as Element) ? SCALE_HOVER : SCALE_DEFAULT
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
    <div
      ref={ringRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-12 w-12 rounded-full opacity-0"
      style={{
        border: '1px solid hsl(var(--foreground) / .30)',
        mixBlendMode: 'exclusion'
      }}
    />
  )
}

export { Cursor }
