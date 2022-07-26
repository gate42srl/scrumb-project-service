export interface project {
  _id: string
  name: string
  type: string
  description: string
  ownerId: string
  role: role[]
  createdAt: number
  modified: number
}

export interface role {
  user: string
  role: string
}

export interface user {
  _id: string
  firstName: string
  lastName: string
  email: string
  password: string
  myProjects: string[]
  sharedProjects: string[]
  isAdmin: boolean
}
