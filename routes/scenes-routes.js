import { Router } from 'express'
import * as controllers from '../controllers/index-controller.js'

const scenesRouter = Router()

// Get all scenes
scenesRouter.get('/', controllers.getAllScenes)

export default scenesRouter
