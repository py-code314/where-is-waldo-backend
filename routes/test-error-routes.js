import { Router } from 'express'
// import * as controllers from '../controllers/index-controller.js'

const testErrorRouter = Router()

// Test prisma db connection
testErrorRouter.get('/prisma-offline', (req, res, next) => {
  const err = new Error(
    'Unable to connect to the database. Please check your connection.'
  )
  err.statusCode = 503
  err.errorCode = 'DATABASE_UNREACHABLE'
  err.title = 'Database Offline'

  return next(err)
})

// Test network connection
testErrorRouter.get('/server-offline', (req, res, next) => {
  const err = new Error('Server is down temporarily. Please try again later.')
  err.statusCode = 503
  err.errorCode = 'CONNECTION_REFUSED'
  err.title = 'Service Unavailable'

  return next(err)
})

// Test unhandled generic errors
testErrorRouter.get('/generic', (req, res, next) => {
  const err = new Error()

  return next(err)
})

export default testErrorRouter
