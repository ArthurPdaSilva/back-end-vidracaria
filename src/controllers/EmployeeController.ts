import { Request, Response } from 'express'
import Employee from '../schemas/Employee'

class EmployeeController {
  async read (req: Request, res: Response): Promise<Response> {
    const employees = await Employee.find()
    return res.json(employees)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const employees = await Employee.create(req.body)
    return res.json(employees)
  }
}

export default new EmployeeController()
