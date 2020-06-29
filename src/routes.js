import { Router } from 'express'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FileController from './app/controllers/FileController'
import ProductsController from './app/controllers/ProductsController'
import OrderController from './app/controllers/OrderController'

import authMiddleware from './app/middlewares/auth'

import multer from 'multer'
import multerConfig from './config/multer'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.put('/users', UserController.update)

routes.get('/products', ProductsController.index)
routes.post('/products', ProductsController.store)
routes.put('/products', ProductsController.update)

routes.post('/order', OrderController.store)

routes.post('/files', upload.single('file'), FileController.store)

export default routes