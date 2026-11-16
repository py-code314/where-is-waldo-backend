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

export { getAllScenes }
