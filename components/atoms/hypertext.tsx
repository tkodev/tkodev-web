'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, Variants } from 'motion/react'
import { cn, cva } from '@/utils/theme'

const styles = {
  root: cva('inline scale-100 cursor-default overflow-hidden'),
  letter: cva('', {
    variants: {
      isValid: {
        true: 'w-3'
      }
    }
  })
}

type HypertextProps = {
  text: string
  duration?: number
  framerProps?: Variants
  className?: string
  animateOnLoad?: boolean
}

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const getRandomInt = (max: number) => Math.floor(Math.random() * max)

const Hypertext: FC<HypertextProps> = (props) => {
  const {
    text,
    duration = 800,
    framerProps = {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 3 }
    },
    className,
    animateOnLoad = true
  } = props
  const [displayText, setDisplayText] = useState(text.split(''))
  const [trigger, setTrigger] = useState(false)
  const interations = useRef(0)
  const isFirstRender = useRef(true)

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (!animateOnLoad && isFirstRender.current) {
          clearInterval(interval)
          isFirstRender.current = false
          return
        }
        if (interations.current < text.length) {
          setDisplayText((t) =>
            t.map((l, i) =>
              l === ' ' ? l : i <= interations.current ? text[i] : alphabets[getRandomInt(26)]
            )
          )
          interations.current = interations.current + 0.1
        } else {
          setTrigger(false)
          clearInterval(interval)
        }
      },
      duration / (text.length * 10)
    )
    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [text, duration, trigger, animateOnLoad])

  return (
    <div className={cn(styles.root())}>
      <AnimatePresence mode="sync">
        {displayText.map((letter, i) => (
          <motion.span
            key={i}
            className={cn(styles.letter({ isValid: letter === ' ', className }))}
            {...framerProps}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}

export { Hypertext }
