/* Throw custom error if a resource is not found */
class RecordNotFoundError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = 404
    this.title = 'Record Not Found'
    this.errorCode = 'NOT_FOUND'
  }
}

export default RecordNotFoundError
