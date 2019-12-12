export function hasPassed(date: Date | number | string) {
  const isDateType = date instanceof Date
  const isInteger = Number.isInteger(+date)

  if (isDateType) return (date as Date).getTime() <= Date.now()
  if (isInteger) return (date as number) <= Date.now()

  throw new Error('Invalid date')
}
