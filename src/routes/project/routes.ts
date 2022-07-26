import { Router } from "express"

// Init the router
const router = Router()

// Import middleware functions
import { validateBody, checkToken, isProjectOwner } from "../../middleware"
// Import validation functions
import { validateCreate } from "../../validation"
// Import handlers
import { createHandler, myProjectsHandler, updateRoleHandler } from "./handler"

// API
router.get("/myProjects", checkToken(["User"]), myProjectsHandler)
router.post("/", checkToken(["User"]), /* validateBody(validateCreate), */ createHandler)
router.put("/role/:id", isProjectOwner, updateRoleHandler)

export default router
