/* -------------------- Import packages -------------------- */
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import * as routes from './routes/index-routes.js'
import errorHandler from './middleware/error-handler.js'


/**
 * -------------- GENERAL SETUP ----------------
 */

const app = express()
app.use(cors()); // Change this later to use corsOptions

// Express middleware
app.use(express.json()) // To read JSON data from client
app.use(express.urlencoded({ extended: true })) // To parse URL encoded form data

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */

import './config/passport-local.js' // Local strategy for initial log-in
import './config/passport-jwt.js' // JWT strategy for all subsequent log ins

/**
 * -------------- ROUTES ----------------
 */

/**
 * -------------- ERROR HANDLER MIDDLEWARE ----------------
 */

app.use(errorHandler)

/**
 * -------------- SERVER ----------------
 */

// Port to listen on
const PORT = process.env.PORT || 3000
app.listen(PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`My first Express app - listening on port ${PORT}!`)
})
