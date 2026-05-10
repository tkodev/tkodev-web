import { forwardRef, HTMLAttributes } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Section } from '@/components/molecules/section'
import { textStyles } from '@/constants/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva(['flex items-center justify-center'])
}

type SectionExampleRef = HTMLDivElement
type SectionExampleProps = HTMLAttributes<SectionExampleRef> & VariantProps<typeof styles.root>

const SectionExample = forwardRef<SectionExampleRef, SectionExampleProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <Section
      ref={ref}
      className={cn(styles.root({ className }))}
      bg={<Bg attach="fixed" variant="sand" />}
      {...rest}
    >
      <h1 className={cn(textStyles.h3())}>Coming Soon</h1>
    </Section>
  )
})
SectionExample.displayName = 'SectionExample'

export { SectionExample }
export type { SectionExampleProps, SectionExampleRef }
