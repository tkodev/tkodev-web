import { forwardRef, HTMLAttributes } from 'react'
import ReactMarkdown from 'react-markdown'
import { textStyles } from '@/constants/theme'
import { countIndents } from '@/utils/string'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('')
}

type MarkdownRef = HTMLDivElement
type MarkdownProps = HTMLAttributes<MarkdownRef> &
  VariantProps<typeof styles.root> & {
    children: string | null | undefined
  }

const Markdown = forwardRef<MarkdownRef, MarkdownProps>((props, ref) => {
  const { className, children, ...rest } = props

  // remove leading indents
  const indents = countIndents(children)
  const regexp = new RegExp(`^[ \\t]{${indents}}`, 'gm')
  const validChildren = children?.replace(regexp, '')

  return (
    <div ref={ref} className={cn(styles.root({ className }))}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className={cn(textStyles.h1({ isMargin: true }))}>{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className={cn(textStyles.h2({ isMargin: true }))}>{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className={cn(textStyles.h3({ isMargin: true }))}>{children}</h3>
          ),
          p: ({ children }) => <p className={cn(textStyles.p({ isMargin: true }))}>{children}</p>,
          ul: ({ children }) => (
            <ul className={cn(textStyles.ul({ isMargin: true }))}>{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className={cn(textStyles.ol({ isMargin: true }))}>{children}</ol>
          ),
          li: ({ children }) => (
            <li className={cn(textStyles.li({ isMargin: false }))}>{children}</li>
          )
        }}
        {...rest}
      >
        {validChildren}
      </ReactMarkdown>
    </div>
  )
})
Markdown.displayName = 'Markdown'

export { Markdown }
export type { MarkdownProps, MarkdownRef }
