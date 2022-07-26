import Ajv from "ajv"
import addFormats from "ajv-formats"
import ajvErrors from "ajv-errors"
const ajv = new Ajv({ allErrors: true })
ajvErrors(ajv)
addFormats(ajv)
// Import schemas
import * as schemas from "./projectSchemas"

// Create validation functions
export const validateCreate = ajv.compile(schemas.BodyCreateProjectSchema)
