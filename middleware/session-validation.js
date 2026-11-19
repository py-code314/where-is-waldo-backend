/* -------------------- Express -------------------- */
import { body, validationResult} from 'express-validator'

/* Error messages */
const intErr = 'must be a positive integer.'

/* Validate and sanitize scene id */
const validateCreateSession = [
  body('sceneId')
    .isInt({ gt: 0 })
    .withMessage(`Each scene ID ${intErr}`)
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

export {validateCreateSession}