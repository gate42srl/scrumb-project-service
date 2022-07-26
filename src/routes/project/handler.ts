import { NextFunction, Request, Response } from "express"
import { createPojectHandler, role, project, getByUserId_output } from "../../types"
import { createProject, getByUserId, updateRole } from "../../controller"
import { updateUser } from "../../service"

export const createHandler = async (req: Request, res: Response, next: NextFunction) => {
  // Getting data
  const body: createPojectHandler = req.body
  // Create new project
  const newProject: project = await createProject(req.tokenData.id, body)
  // Add project to user's myProjects
  await updateUser(newProject.ownerId, { $push: { myProjects: newProject._id } })

  res.status(200).json(newProject)
}

export const myProjectsHandler = async (req: Request, res: Response, next: NextFunction) => {
  // Getting data
  const userId: string = req.tokenData._id
  // Getting projects
  const projects: getByUserId_output = await getByUserId(userId)
  // send
  res.status(200).json(projects)
}

export const updateRoleHandler = async (req: Request, res: Response, next: NextFunction) => {
  const roleUser: role = req.body.roleUser
  const updatedproject = (await updateRole(req.project, roleUser, req.body.roleUpdate)) as project
  res.status(200).json(updatedproject)
}
