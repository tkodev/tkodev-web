import { format } from 'date-fns-tz'
import { simpleDateFormat } from '@/constants/date'

const formatStdDateRange = (startDate: Date, endDate: Date | undefined, timeZone: string) => {
  const startDateStr = format(startDate, simpleDateFormat, { timeZone })
  const endDateStr = endDate ? format(endDate, simpleDateFormat, { timeZone }) : 'Present'

  return `${startDateStr} to ${endDateStr}`
}

export { formatStdDateRange }
