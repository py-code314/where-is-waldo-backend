/* Express error handler middleware */
const errorHandler = (err, req, res, next) => {
  // console.log("🚀 ~ errorHandler ~ err:", err)
  /* Check if headers have already been sent to avoid "Can't set
   headers after they are sent" error */
  if (res.headersSent) {
    return next(err) // Pass to default Express error handler if response already started
  }

  // Error data
  const statusCode = err.statusCode || err.status || 500
  const errorMsg =
    err.message || 'Something went wrong. Please try again later.'
  const errorTitle = err.title || 'Internal Server Error'
  const errorCode = err.errorCode || 'SERVER_ERROR'

  // Prisma/db errors
  if (err.code && typeof err.code === 'string' && err.code.startsWith('P')) {
    switch (err.code) {
      case 'P1001':
        statusCode = 503
        errorMsg =
          'Unable to connect to the database. Please check your connection.'
        errorTitle = 'Database Offline'
        errorCode = 'DATABASE_UNREACHABLE'
        break

      case 'P1008':
        statusCode = 504
        errorMsg =
          'Database operation took too long to complete. Please try again later.'
        errorTitle = 'Database Timeout'
        errorCode = 'DATABASE_TIMEOUT'
        break

      case 'P2021':
        statusCode = 500
        errorMsg =
          'Trouble loading the games right now. Please try again later.'
        errorTitle = 'Database Setup Issue'
        errorCode = 'DATABASE_SCHEMA_ERROR'
        break

      default:
        statusCode = 500
        errorMsg =
          'An unexpected database error occurred. Please try again later.'
        errorTitle = 'Database Error'
        errorCode = `PRISMA_ERROR_${err.code}`
        break
    }
  } else if (err.code && typeof err.code === 'string') { // Node.js/system errors
    switch (err.code) {
      case 'ECONNREFUSED':
        statusCode = 503
        errorMsg = 'Server is down temporarily. Please try again later.'
        errorTitle = 'Service Unavailable'
        errorCode = 'CONNECTION_REFUSED'
        break

      case 'ENOTFOUND':
        statusCode = 503
        errorMsg =
          'Unable to resolve network address. Please check your connection.'
        errorTitle = 'Network Error'
        errorCode = 'HOST_NOT_FOUND'
        break

      case 'ETIMEDOUT':
        statusCode = 504
        errorMsg =
          'Network request took too long to respond. Please try again later.'
        errorTitle = 'Gateway Timeout'
        errorCode = 'NETWORK_TIMEOUT'
        break

      default:
        statusCode = 500
        errorMsg = 'A network or system error occurred. Please try again later.'
        errorTitle = 'Internal Server Error'
        errorCode = `SERVER_ERROR_${err.code}`
        break
    }
  }

  return res.status(statusCode).json({
    success: false,
    errorMsg,
    errorTitle,
    errorCode,
  })
}

export default errorHandler
