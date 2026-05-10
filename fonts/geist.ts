import localFont from 'next/font/local'

const geistSansFont = localFont({
  src: '../public/fonts/geist/geist-vf.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMonoFont = localFont({
  src: '../public/fonts/geist/geist-mono-vf.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export { geistMonoFont, geistSansFont }
