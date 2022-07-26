import { Project } from "../model/project"
import { project, role, user, getByUserId_output } from "../types"
import { getUserById } from "../service"

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

export const updateRole = async (project: any, userRole: role, roleUpdate: string): Promise<project | null> => {
  const index: number = project.role.findIndex((e: any) => e.user == userRole.user)
  if (index == -1) throw new Error("user not found")
  /*   const updatedProject: project | null = await Project.findByIdAndUpdate(project._id, {
    $set: { "role.index": roleUpdate },
  })
  return updatedProject */
  project.role[index].role = roleUpdate
  const updatedProject: project = await project.save()
  return updatedProject
  // PLEASE CHECK IF THE USER TO BE UPDATED IS THE PoWNER
}
