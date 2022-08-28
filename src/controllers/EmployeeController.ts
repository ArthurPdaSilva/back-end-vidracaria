import { Request, Response } from 'express'
import Employee from '../schemas/Employee'
import EmployeeInterface from '../types/EmployeeInterface'

class EmployeeController {
  async read (req: Request, res: Response): Promise<Response> {
    const employees = await Employee.find()
    return res.json(employees)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const employees = await Employee.create(req.body)
    return res.json(employees)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { email, phone, jobPosition, daily } = req.body
    const employeeForEdit = await Employee.findById(req.params.id) as EmployeeInterface
    employeeForEdit.email = email
    employeeForEdit.phone = phone
    employeeForEdit.jobPosition = jobPosition
    employeeForEdit.daily = daily
    const employeeUpdated = await Employee.findOneAndUpdate({ _id: req.params.id }, employeeForEdit)
    return res.json(employeeUpdated)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    await Employee.findByIdAndDelete({ _id: req.params.id })
    return res.json({ message: 'Apagado com sucesso!' })
  }
}

export default new EmployeeController()
