/* -------------------- Express -------------------- */
import { matchedData } from 'express-validator'
/* -------------------- Prisma -------------------- */
import { prisma } from '../lib/prisma.js'
/* -------------------- Errors -------------------- */
import RecordNotFoundError from '../errors/resource-error.js'

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
        status: true,
      },
    })
    // console.log('🚀 ~ createGameSession ~ session:', session)

    return res.status(201).json({
      success: true,
      sessionData: session,
    })
  } catch (err) {
    console.error(err)

    return next(err)
  }
}

async function verifyCoordinates(req, res, next) {
  try {
    const { sceneId, characterId, x, y } = matchedData(req)

    const coordinates = await prisma.sceneCharacter.findUnique({
      where: {
        sceneId_characterId: {
          sceneId,
          characterId,
        },
      },
      select: {
        minX: true,
        maxX: true,
        minY: true,
        maxY: true,
        character: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
    // console.log('🚀 ~ verifyCoordinates ~ coordinates:', coordinates)

    const { character } = coordinates
    // Validate click coordinates
    let isMatch = false
    if (
      x >= coordinates.minX &&
      x <= coordinates.maxX &&
      y >= coordinates.minY &&
      y <= coordinates.maxY
    ) {
      isMatch = true
    }

    return res.json({
      success: true,
      isMatch,
      characterData: character,
    })
  } catch (err) {
    console.error(err)

    return next(err)
  }
}

export { createGameSession, verifyCoordinates }
