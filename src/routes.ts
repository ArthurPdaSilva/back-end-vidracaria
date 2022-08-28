import { Router } from 'express'
import CustomerController from './controllers/CustomerController'

const routes = Router()

routes.get('/customers', CustomerController.read)
routes.post('/customer', CustomerController.create)
routes.put('/customer/:id', CustomerController.update)
routes.delete('/customer/:id', CustomerController.delete)

export default routes
