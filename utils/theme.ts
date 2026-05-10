import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

/**
 * Merges and combines class names using `clsx` and `tailwind-merge`.
 *
 * @param inputs - An array of class values which can be strings, arrays, or objects with boolean values.
 * @returns A single string of merged class names.
 */
const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

/**
 * Calculates the rem value of a given pixel value.
 * @param pixels - The pixel value to convert to rem.
 * @param fontSize - The base font size to convert pixels to rem.
 */
const pxToRem = (pixels: number | string, fontSize = 16) => {
  const parsedPixels =
    typeof pixels === 'string' ? parseInt(pixels.replace(/\s*px/gi, ''), 10) : pixels
  const rem = parsedPixels / fontSize
  return `${rem}rem`
}

export type { VariantProps }
export { cn, cva, pxToRem }
