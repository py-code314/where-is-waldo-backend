import { Router } from 'express'
import * as controllers from '../controllers/index-controller.js'

const sessionsRouter = Router()

// Create a game session
sessionsRouter.post('/', controllers.createGameSession)


export default sessionsRouter
