/* -------------------- Prisma -------------------- */
import { prisma } from '../lib/prisma.js'

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

   

    const scene = await prisma.scene.findUnique({
      where: {
        id: sceneId,

      },
      select: {
        id: true,
        title: true,
        // description: true,
        difficulty: true,
        imageUrl: true,
        // previewUrl: true,
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
