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
  const { sceneId, characterId, x, y, sessionId } = matchedData(req)
  try {
    const result = await prisma.sceneCharacter.findUnique({
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
    // console.log('🚀 ~ verifyCoordinates ~ result:', result)
    // const error =  new Error(
    //   'Requested game does not exist. Please choose a different game.'
    // )
    // error.errorCode = 'NETWORK_TIMEOUT'
    // throw error

    /* Throw error (don't return) if the combo doesn't exist
    so that 'catch' block catches the error and changes game 
    session status to 'ABANDONED' */
    if (!result) {
      const invalidCombo = new RecordNotFoundError(
        'The specified character was not found in this scene.'
      )
      // return next(invalidCombo)
      throw invalidCombo
    }

    const { character } = result
    // Validate click coordinates
    let isMatch = false
    if (
      x >= result.minX &&
      x <= result.maxX &&
      y >= result.minY &&
      y <= result.maxY
    ) {
      isMatch = true
    }

    return res.json({
      success: true,
      isMatch,
      characterData: character,
    })
  } catch (err) {
    console.error('Verify Error:', err)

    /* Change game session status to 'ABANDONED' if there is
    any critical backend error during the play */
    try {
      await prisma.gameSession.update({
        where: {
          id: sessionId,
        },
        data: {
          status: 'ABANDONED',
        },
      })
    } catch (error) {
      console.error('Update Error:', error)

      return next(error)
    }

    return next(err)
  }
}

export { createGameSession, verifyCoordinates }
