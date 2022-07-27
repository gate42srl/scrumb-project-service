export class UNCAUGHT_EXCEPTION_ERROR extends Error {}
export class UNHANDLED_REJECTION_ERROR extends Error {}
export class VALIDATION_ERROR extends Error {
  errorMessages: string[]

  constructor(messageArray: string[]) {
    super()
    this.errorMessages = messageArray
  }
}
export class AUTHORIZATION_ERROR extends Error {}

// Custom errors for functions
export class UPDATE_ROLE_ERROR extends Error {}
