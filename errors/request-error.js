/* Throw custom error for invalid URL */
class BadRequestError extends Error {
  constructor(
    message = 'The web address looks invalid. Please check the URL and try again.'
  ) {
    super(message)
    this.statusCode = 400
    this.title = 'Bad Request'
    this.errorCode = 'BAD_REQUEST'
  }
}

export default BadRequestError
