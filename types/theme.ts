import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'
import { Config } from 'tailwindcss'

type Theme = NonNullable<Config['theme']>

type ThemeMode = 'light' | 'dark'

type SvgComponent = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>
>

export type { SvgComponent, Theme, ThemeMode }
