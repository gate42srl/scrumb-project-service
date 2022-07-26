import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import config from "config"
import { serviceErrorFunction } from "./utils/utils"
import { user } from "../types"
import mongoose from "mongoose"

export const getUserById = async (id: string): Promise<user> => {
  try {
    const configurationObj: AxiosRequestConfig = {
      method: "get",
      url: config.get("USER_SERVICE") + "/" + id,
      headers: {
        Authorization: config.get("TOKEN_BE"),
      },
    }

    var result: AxiosResponse = await axios(configurationObj)
    return result.data
  } catch (err: any) {
    return serviceErrorFunction(err, "User")
  }
}

export const updateUser = async (id: string, user: any): Promise<user> => {
  try {
    const configurationObj: AxiosRequestConfig = {
      method: "put",
      url: config.get("USER_SERVICE") + "/" + id,
      data: user,
      headers: {
        Authorization: config.get("TOKEN_BE"),
      },
    }

    var result: AxiosResponse = await axios(configurationObj)
    return result.data
  } catch (err: any) {
    return serviceErrorFunction(err, "User")
  }
}
