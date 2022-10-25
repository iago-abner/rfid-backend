import { Router } from 'express'
import { UserController } from './controllers/userController'

export const router = Router()

router.get('/users', UserController.find)

router.get('/user/:tag', UserController.findByTag)

router.post('/user', UserController.create)

router.delete('/user/:tag', UserController.delete)