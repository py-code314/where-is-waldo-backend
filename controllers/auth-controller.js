/* -------------------- Import from packages -------------------- */
import 'dotenv/config'
import bcrypt from 'bcryptjs'
import { body, validationResult, matchedData } from 'express-validator'
import passport from 'passport'
import jwt from 'jsonwebtoken'
/* -------------------- Prisma -------------------- */
import { prisma } from '../lib/prisma.js'
/* -------------------- Errors -------------------- */
import DatabaseConnectionError from '../errors/database-error.js'

/* Error messages */
const emptyErr = 'can not be empty.'
const existsErr = 'already in use.'
const lengthErr = 'must be at least 8 characters long.'
const emailInvalidErr = 'is invalid.'
const passwordInvalidErr =
  'must contain an uppercase letter, a number, and a special character.'
const alphaErr = 'Only letters, spaces, and hyphen are allowed in a name.'
