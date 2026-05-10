import { useCallback, useState } from 'react'
import { SelectEntry } from '@/types/layout'

type UseFilterProps = {
  filterEntries: SelectEntry[]
  layoutEntries?: SelectEntry[]
}

const useFilter = (props: UseFilterProps) => {
  const { filterEntries, layoutEntries } = props

  const [activeFilterValue, setActiveFilterValue] = useState<string>(filterEntries[0].value)
  const [activeLayoutValue, setActiveLayoutValue] = useState<string | undefined>(
    layoutEntries?.[0].value
  )

  const handleFilterClick = useCallback(
    (filterEntry: SelectEntry) => {
      const isActive = activeFilterValue.includes(filterEntry.value)
      const newActiveFilterValues = isActive ? filterEntries[0].value : filterEntry.value
      setActiveFilterValue(newActiveFilterValues)
    },
    [filterEntries, activeFilterValue]
  )

  const handleLayoutClick = useCallback(
    (layoutEntry: SelectEntry) => {
      const isActive = activeLayoutValue === layoutEntry.value
      const newActiveLayoutValue = isActive ? layoutEntries?.[0].value : layoutEntry.value

      setActiveLayoutValue(newActiveLayoutValue)
    },
    [layoutEntries, activeLayoutValue]
  )

  const isDefaultFilter = activeFilterValue === filterEntries[0].value

  return {
    activeFilterValue,
    activeLayoutValue,
    isDefaultFilter,
    handleFilterClick,
    handleLayoutClick
  }
}

export { useFilter }
export type { UseFilterProps }
