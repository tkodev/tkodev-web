import type { Metadata } from 'next'
import { FC, ReactNode } from 'react'
import { Layout } from '@/components/templates/layout'
import { allianceNo2Font } from '@/fonts/alliance-no2'
import { geistSansFont } from '@/fonts/geist'
import { BgmProvider } from '@/providers/bgm'
import { ThemeProvider } from '@/providers/theme'
import { cn, cva } from '@/utils/theme'
import '../themes/theme.css'

const styles = {
  html: cva('h-full w-full scroll-smooth'),
  body: cva('bg-background font-geist-sans text-foreground h-full w-full text-base font-light')
}

const pagedata = {
  title: 'Tony Ko / Portfolio',
  siteName: 'tko.dev',
  description:
    "I'm Tony Ko, a Staff Software Engineer with a proven track record of delivering high-performing, secure, and accessible software solutions for top North American brands, including Aeroplan, Air Miles, and Toyota. My expertise spans web,  mobile, browser extensions, and embedded systems, backed by a strong foundation in  TypeScript, Lua, and C. Passionate about fostering team growth, I blend technical excellence with mentorship to lead impactful projects that drive innovation and achieve business goals",
  url: 'https://tko.dev'
}

const metadata: Metadata = {
  title: pagedata.title,
  description: pagedata.description,
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon.ico' }
    ],
    apple: [{ url: '/favicons/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/favicons/safari-pinned-tab.svg' }]
  },
  openGraph: {
    title: pagedata.title,
    description: pagedata.description,
    url: pagedata.url,
    siteName: pagedata.siteName,
    images: [
      {
        url: 'https://tko.dev/favicons/preview.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_CA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: pagedata.title,
    description: pagedata.description,
    images: [
      {
        url: 'https://tko.dev/favicons/preview.png',
        width: 1200,
        height: 630,
        alt: pagedata.title
      }
    ]
  }
}

type LayoutPageProps = {
  children: ReactNode
}

const LayoutPage: FC<LayoutPageProps> = (props) => {
  const { children } = props
  return (
    <html
      className={cn(styles.html())}
      data-scroll-behavior="smooth"
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(styles.body(), allianceNo2Font.variable, geistSansFont.variable)}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <BgmProvider>
            <Layout>{children}</Layout>
          </BgmProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export { metadata }
export default LayoutPage
