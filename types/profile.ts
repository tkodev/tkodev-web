type ProfileId =
  | 'tony'
  | 'jax'
  | 'ron'
  | 'yuval'
  | 'tulio'
  | 'zeena'
  | 'harpreet'
  | 'leo'
  | 'ben'
  | 'nikita'
  | 'steven'
  | 'nahuel'

type ProfileEntry = {
  id: ProfileId
  name: string
  title: string
  linkedin: string
  github: string
  email: string
  phone: string
}

export type { ProfileEntry, ProfileId }
