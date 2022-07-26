import { project } from "../model"

export interface getByUserId_output {
  myProjects: project[]
  sharedProjects: project[]
}
