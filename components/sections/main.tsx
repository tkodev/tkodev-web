import { FC, HTMLAttributes } from 'react'
import { cn, cva, type VariantProps } from '@/utils/theme'

const styles = {
  root: cva('bg-background h-full min-h-full w-full shadow-inner')
}

type MainProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles.root>

const Main: FC<MainProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <main className={cn(styles.root({ className }))} {...rest}>
      {children}
    </main>
  )
}

export { Main }
