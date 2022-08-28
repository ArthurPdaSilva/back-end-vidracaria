import { Router } from 'express'
import CustomerController from './controllers/CustomerController'
import EmployeeController from './controllers/EmployeeController'
import ProjectionController from './controllers/ProjectionController'

const routes = Router()

routes.get('/customers', CustomerController.read)
routes.post('/customer', CustomerController.create)
routes.put('/customer/:id', CustomerController.update)
routes.delete('/customer/:id', CustomerController.delete)

routes.get('/employees', EmployeeController.read)
routes.post('/employee', EmployeeController.create)
routes.put('/employee/:id', EmployeeController.update)
routes.delete('/employee/:id', EmployeeController.delete)

routes.get('/projections', ProjectionController.read)
routes.post('/projection/', ProjectionController.create)

export default routes
