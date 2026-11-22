/* -------------------- Express -------------------- */
import { body, validationResult } from 'express-validator'

/* Error messages */
const emptyErr = 'is required.'
const rangeErr = 'must be a float between 0 and 100.'
const intErr = 'must be a positive integer.'

/* Validate and sanitize click data */
const validateClickData = [
  body('sceneId')
    .notEmpty()
    .withMessage(`Scene ID ${emptyErr}`)
    .isInt({ gt: 0 })
    .withMessage(`Each scene ID ${intErr}`)
    .toInt(),
  body('characterId')
    .notEmpty()
    .withMessage(`Character ID ${emptyErr}`)
    .isInt({ gt: 0 })
    .withMessage(`Each character ID ${intErr}`)
    .toInt(),
  body('clickX')
    .notEmpty()
    .withMessage(`X Coordinate ${emptyErr}`)
    .isFloat({ min: 0, max: 100 })
    .withMessage(`X coordinate ${rangeErr} `)
    .toFloat(),
  body('clickY')
    .notEmpty()
    .withMessage(`Y Coordinate ${emptyErr}`)
    .isFloat({ min: 0, max: 100 })
    .withMessage(`Y coordinate ${rangeErr} `)
    .toFloat(),
  body('sessionId')
    .notEmpty()
    .withMessage(`Session ID ${emptyErr}`)
    .isInt({ gt: 0 })
    .withMessage(`Each session ID ${intErr}`)
    .toInt(),

  async (req, res, next) => {
    // Validate request
    const errors = validationResult(req)
    // console.log('🚀 ~ errors:', errors)

    // Show errors if validation fails
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      })
    }

    next()
  },
]

export { validateClickData }
