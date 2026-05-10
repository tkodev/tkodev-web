import { forwardRef, HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react'
import { cn, cva } from '@/utils/theme'

const styles = {
  tableWrapper: cva('relative h-auto min-w-full overflow-x-auto'),
  table: cva('w-full caption-bottom text-sm'),
  tableHeader: cva('[&_tr]:border-b'),
  tableBody: cva('[&_tr:last-child]:border-0'),
  tableFooter: cva('bg-muted/50 border-t [&>tr]:last:border-b-0'),
  tableRow: cva('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors'),
  tableHead: cva(
    'text-muted-foreground min-h-24 px-4 py-8 text-left align-middle font-light whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]'
  ),
  tableCell: cva(
    'min-h-32 px-4 py-8 text-left align-top whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]'
  ),
  tableCaption: cva('text-muted-foreground mt-4 text-sm')
}

const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn(styles.tableWrapper({ className }))}>
      <table ref={ref} className={cn(styles.table())} {...props} />
    </div>
  )
)
Table.displayName = 'Table'

const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn(styles.tableHeader(), className)} {...props} />
  )
)
TableHeader.displayName = 'TableHeader'

const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn(styles.tableBody(), className)} {...props} />
  )
)
TableBody.displayName = 'TableBody'

const TableFooter = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn(styles.tableFooter(), className)} {...props} />
  )
)
TableFooter.displayName = 'TableFooter'

const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={cn(styles.tableRow(), className)} {...props} />
  )
)
TableRow.displayName = 'TableRow'

const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th ref={ref} className={cn(styles.tableHead(), className)} {...props} />
  )
)
TableHead.displayName = 'TableHead'

const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn(styles.tableCell(), className)} {...props} />
  )
)
TableCell.displayName = 'TableCell'

const TableCaption = forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption ref={ref} className={cn(styles.tableCaption(), className)} {...props} />
  )
)
TableCaption.displayName = 'TableCaption'

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow }
