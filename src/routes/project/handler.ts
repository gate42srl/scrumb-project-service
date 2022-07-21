import { Request, Response } from "express"
import { IResponse } from "../../types"

export const getAll = async (req: Request, res: Response<IResponse<any>>) => {}

export const getById = async (req: Request, res: Response<IResponse<any>>) => {
  res.send({ success: false, message: "Not implemented" })
}

export const getLastLogin = async (req: Request, res: Response<IResponse<any>>) => {
  res.send({ success: false, message: "Not implemented yet" })
}

export const createUser = async (req: Request, res: Response<IResponse<any>>) => {
  res.send({ success: false, message: "Not implemented yet" })
}

export const updateUser = async (req: Request, res: Response<IResponse<any>>) => {
  res.send({ success: false, message: "Not implemented yet" })
}

export const patchUser = async (req: Request, res: Response<IResponse<any>>) => {
  res.send({ success: false, message: "Not implemented yet" })
}

export const changePassword = async (req: Request, res: Response<IResponse<any>>) => {
  res.send({ success: false, message: "Not implemented yet" })
}

export const recoverPassword = async (req: Request, res: Response<IResponse<any>>) => {
  res.send({ success: false, message: "Not implemented yet" })
}

export const deleteUser = async (req: Request, res: Response<IResponse<any>>) => {
  res.send({ success: false, message: "Not implemented yet" })
}

export const checkIsValid = async (req: Request, res: Response<IResponse<any>>) => {
  res.send({ success: false, message: "Not implemented yet" })
}
