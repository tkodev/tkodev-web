import { ThemeMode } from '@/types/theme'
import { cva } from '@/utils/theme'

const defaultTheme: ThemeMode = 'dark'

const marginVariants = {
  variants: {
    isMargin: {
      true: 'mb-4'
    }
  }
}

const textStyles = {
  h1: cva('font-alliance-no2 text-h2 lg:text-h1', marginVariants),
  h2: cva('font-alliance-no2 text-h4 lg:text-h3', marginVariants),
  h3: cva('font-alliance-no2 text-h6 lg:text-h5', marginVariants),
  p: cva('font-geist-sans', marginVariants),
  ul: cva('list-disc pl-4', marginVariants),
  ol: cva('list-decimal pl-4', marginVariants),
  li: cva('*:mb-0', marginVariants),
  none: cva('', marginVariants),
  sr: cva('sr-only')
}

export { defaultTheme, textStyles }
