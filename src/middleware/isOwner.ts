import { NextFunction, Request, Response } from "express"
import config from "config"
import jwt from "jsonwebtoken"
import { AUTHORIZATION_ERROR } from "../error"
import { Project } from "../model/project"

export const isProjectOwner = async (req: Request, res: Response, next: NextFunction) => {
  let payload: any
  const token: string | undefined = req.get("Authorization")

  if (token == undefined) {
    throw new AUTHORIZATION_ERROR("token required...")
  } else {
    // Retrieving and first data check
    payload = jwt.verify(token, config.get("JWT_SECRET_KEY"))
    const project: any = await Project.findById(req.params.id)

    if (!project || project.ownerId != payload.id) {
      const message: string = project == null ? "no project with the provided id..." : "not authorized..."
      throw new AUTHORIZATION_ERROR(message)
    }
    // Update req object with useful info
    req.project = project
    return next()
  }
}
