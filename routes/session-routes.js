import { Router } from 'express'
// Middleware to validate request data
import { validateCreateSession, validateClickData } from '../middleware/index.js'
import * as controllers from '../controllers/index-controller.js'

const sessionsRouter = Router()

// Create a game session
sessionsRouter.post('/', validateCreateSession, controllers.createGameSession)

// Verify click coordinates
sessionsRouter.post('/verify', validateClickData, controllers.verifyCoordinates)


export default sessionsRouter
