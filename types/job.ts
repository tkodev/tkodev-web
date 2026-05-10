import { ClientId } from './client'

type JobId =
  | 'badalSeniorSoftwareEngineer'
  | 'badalStaffSoftwareEngineer'
  | 'quantumMobStaffSoftwareEngineer'
  | 'quantumMobSeniorSoftwareEngineer'
  | 'quantumMobSoftwareEngineerII'
  | 'quantumMobSoftwareEngineerI'
  | 'brandfireIntermediateFrontEndDeveloper'
  | 'kosInteriorDesignInteriorDesigner'

type JobEntry = {
  id: JobId
  companyId: ClientId
  companyName: string
  title: string
  location: string
  startDate: Date
  endDate?: Date
  skills: string[]
}

export type { JobEntry, JobId }
