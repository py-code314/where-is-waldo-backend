import { Router } from 'express'
import * as controllers from '../controllers/index-controller.js'

const scenesRouter = Router()

// Get all scenes
scenesRouter.get('/', controllers.getAllScenes)

// Get a single scene based on id
scenesRouter.get('/:sceneId', controllers.getScene)

export default scenesRouter
