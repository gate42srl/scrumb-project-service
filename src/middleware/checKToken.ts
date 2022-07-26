import { NextFunction, Request, Response } from "express"
import config from "config"
import jwt, { JsonWebTokenError } from "jsonwebtoken"
import { AUTHORIZATION_ERROR } from "../error"

export const checkToken = (authorized: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    var tokenData: any
    const token = req.get("Authorization")

    if (token == "" || token == undefined) {
      throw new AUTHORIZATION_ERROR("token required...")
    } else {
      if (token === config.get("TOKEN_BE")) {
        if (!authorized.includes("Micro")) throw new AUTHORIZATION_ERROR("not authorized...")
        return next()
      } else if (!authorized.includes("User")) throw new AUTHORIZATION_ERROR("not authorized...")
      tokenData = jwt.verify(token, config.get("JWT_SECRET_KEY"))
      req.tokenData = tokenData
      next()
    }
  }
}
