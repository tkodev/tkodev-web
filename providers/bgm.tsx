'use client'

import { createContext, FC, Fragment, ReactNode, useContext } from 'react'
import { useBgm } from '@/hooks/bgm'

type BgmContextValue = {
  isPlaying: boolean
  toggle: () => void
}

const BgmContext = createContext<BgmContextValue | null>(null)

type BgmProviderProps = {
  children: ReactNode
}

const BgmProvider: FC<BgmProviderProps> = ({ children }) => {
  const { audio, isPlaying, toggle } = useBgm()

  return (
    <BgmContext.Provider value={{ isPlaying, toggle }}>
      <Fragment>
        {audio}
        {children}
      </Fragment>
    </BgmContext.Provider>
  )
}

const useBgmContext = () => {
  const ctx = useContext(BgmContext)
  if (!ctx) throw new Error('useBgmContext must be used within BgmProvider')
  return ctx
}

export { BgmProvider, useBgmContext }
