import { Router } from 'express'
import { usersRoutes } from './user.routes'

export const router = Router()

router.use("/users", usersRoutes)