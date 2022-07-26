import type { JSONSchemaType } from "ajv"
import { createPojectHandler } from "../../types/handlers"

export const BodyCreateProjectSchema: JSONSchemaType<createPojectHandler> = {
  type: "object",
  properties: {
    name: { type: "string" },
    type: { type: "string" },
    description: { type: "string" },
  },
  required: ["name", "type", "description"],
  additionalProperties: false,
  errorMessage: {
    type: "type should be an object",
    properties: {
      name: "name key must be a string",
      type: "type key must be a string",
      description: "description key must be a string",
    },
    required: "name, type and description are required...",
    additionalProperties: "properties other than the required ones are not allowed",
    _: "unknown validation error...",
  },
}
