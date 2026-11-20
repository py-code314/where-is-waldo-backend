/* -------------------- Prisma -------------------- */
import { prisma } from '../lib/prisma.js'
/* -------------------- Errors -------------------- */
import BadRequestError from '../errors/request-error.js'
import RecordNotFoundError from '../errors/resource-error.js'

/* Get all scenes */
async function getAllScenes(req, res, next) {
  try {
    const scenes = await prisma.scene.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        difficulty: true,
        previewUrl: true,
        previewAlt: true,
        characters: {
          select: {
            character: {
              select: {
                id: true,
                avatarUrl: true,
              },
            },
          },
        },
      },
    })
    // console.log('🚀 ~ getAllScenes ~ scenes:', scenes)

    return res.json({
      success: true,
      scenes,
    })
  } catch (err) {
    console.error('Failed to fetch scenes', err)
    return next(err)
  }
}

// Get a single scene data
async function getScene(req, res, next) {
  try {
    const sceneId = Number(req.params.sceneId)
    const isInt = Number.isInteger(sceneId)

    // Make sure sceneId is a number
    if (!isInt) {
      const badRequest = new BadRequestError()
      return next(badRequest)
    }

    const scene = await prisma.scene.findUnique({
      where: {
        id: sceneId,
      },
      select: {
        id: true,
        title: true,
        difficulty: true,
        imageUrl: true,
        imageAlt: true,
        characters: {
          select: {
            character: {
              select: {
                id: true,
                name: true,
                avatarUrl: true,
              },
            },
          },
        },
      },
    })
    // console.log('🚀 ~ getScene ~ scene:', scene)

    // Throw error if scene is not found
    if (!scene) {
      const invalidScene = new RecordNotFoundError(
        'The scene you are looking for can not be found.'
      )
      return next(invalidScene)
    }

    return res.json({
      success: true,
      scene,
    })
  } catch (err) {
    console.error('Failed to fetch scene', err)
    return next(err)
  }
}

export { getAllScenes, getScene }
