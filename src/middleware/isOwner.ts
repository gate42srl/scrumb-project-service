import { NextFunction, Request, Response } from "express"
import config from "config"
import jwt, { JsonWebTokenError } from "jsonwebtoken"
import { AUTHORIZATION_ERROR } from "../error"
import { Project } from "../model/project"
import { project } from "../types"
import { MongooseDocumentMiddleware, Model, Query } from "mongoose"

export const isProjectOwner = async (req: Request, res: Response, next: NextFunction) => {
  let payload: any
  const token: string | undefined = req.get("Authorization")

  if (token == undefined) {
    throw new AUTHORIZATION_ERROR("token required...")
  } else {
    // Retrieving and first data check
    payload = jwt.verify(token, config.get("JWT_SECRET_KEY"))
    const project: any = await Project.findById(req.params.id) // returned value : project | null
    if (!project) throw new AUTHORIZATION_ERROR("no project with the provided id...")
    // Check user making request is pOwner
    if (project.ownerId != payload.id) throw new AUTHORIZATION_ERROR("not authorized...")
    // Update req object with useful info
    req.project = project
    return next()
  }
}
