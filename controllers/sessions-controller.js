/* -------------------- Express -------------------- */
import { matchedData } from 'express-validator'
/* -------------------- Prisma -------------------- */
import { prisma } from '../lib/prisma.js'
/* -------------------- Errors -------------------- */
import BadRequestError from '../errors/request-error.js'

/* Create a game session */
async function createGameSession(req, res, next) {
  const { sceneId } = matchedData(req)
  // console.log('🚀 ~ sceneId:', sceneId)

  return res.json({
    success: true,
  })
}

export { createGameSession }
