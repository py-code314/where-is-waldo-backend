/* -------------------- Express -------------------- */
import { matchedData } from 'express-validator'
/* -------------------- Prisma -------------------- */
import { prisma } from '../lib/prisma.js'
/* -------------------- Errors -------------------- */
import BadRequestError from '../errors/request-error.js'

/* Create a game session */
async function createGameSession(req, res, next) {
  try {
    const { sceneId } = matchedData(req)
    // console.log('🚀 ~ sceneId:', sceneId)

    const scene = await prisma.scene.findUnique({
      where: {
        id: sceneId,
      },
    })
    // console.log('🚀 ~ createGameSession ~ scene:', scene)

    // Throw error if scene is not found
    if (!scene) {
      const invalidScene = new RecordNotFoundError(
        'The scene you are looking for can not be found.'
      )
      return next(invalidScene)
    }

    const session = await prisma.gameSession.create({
      data: {
        sceneId,
      },
      select: {
        id: true,
      },
    })
    // console.log('🚀 ~ createGameSession ~ session:', session)

    return res.json({
      success: true,
      session,
    })
  } catch (err) {
    console.error(err)

    return next(err)
  }
}

export { createGameSession }
