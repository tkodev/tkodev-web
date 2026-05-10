const countIndents = (input?: string | null): number => {
  if (!input) return 0

  const indents = input
    .split('\n')
    .map((line) => {
      if (!line.trim()) return 0
      let count = 0
      for (const char of line) {
        if (char === ' ') {
          count += 1
        } else if (char === '\t') {
          count += 1 // Tabs are treated as one indent.
        } else {
          break
        }
      }
      return count
    })
    .filter((indent) => indent > 0)
  return indents.length ? Math.min(...indents) : 0
}

export { countIndents }
