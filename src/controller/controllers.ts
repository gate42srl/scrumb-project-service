import { Project } from "../model/project"
import { project, role, user, getByUserId_output } from "../types"
import { getUserById } from "../service"
import { UPDATE_ROLE_ERROR } from "../error"

export const createProject = async (userId: string, body: any): Promise<project> => {
  // Check the user on db
  let user: user = await getUserById(userId)
  // Project configuration
  const startingRole: role[] = [{ user: user._id, role: "pOwner" }]
  let project: Partial<project> = {
    name: body.name,
    type: body.type,
    description: body.description,
    ownerId: user._id,
    role: startingRole,
  }
  //Create project
  let newProject: any = new Project(project)
  newProject = await newProject.save()

  return newProject
}

export const getByUserId = async (userId: string): Promise<getByUserId_output> => {
  const user: user = await getUserById(userId)
  // Getting projects
  const myProjects: project[] = await Project.find({ _id: { $in: user.myProjects } })
  const sharedProjects: project[] = await Project.find({ _id: { $in: user.sharedProjects } })

  const projects: getByUserId_output = { myProjects: myProjects, sharedProjects: sharedProjects }

  return projects
}

export const updateRole = async (project: any, userRole: role, roleUpdate: string): Promise<project> => {
  // Get the position of user to update in the role array
  const index: number = project.role.findIndex((e: role) => e.user == userRole.user)
  // Check user to update is not pOwner
  if (index == -1 || project.role[index].role == "pOwner") {
    const message = index == -1 ? "user not found" : "not authorized to change pOwner role"
    throw new UPDATE_ROLE_ERROR(message)
  }
  // Update
  project.role[index].role = roleUpdate
  const updatedProject: project = await project.save()
  return updatedProject
}
