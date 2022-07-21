import { Router } from "express"

// Init the router
const router = Router()

// Import middleware functions
import { validateBody, checkToken } from "../../middleware"
// Import validation functions
import {} from "../../validation"
// Import handlers
import {} from "./handler"

// API

export default router
