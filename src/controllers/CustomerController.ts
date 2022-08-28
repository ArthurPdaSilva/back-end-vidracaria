import { Request, Response } from 'express'
import Customer from '../schemas/Customer'
import CustomerInterface from '../types/CustomerInterface'

class CustomerController {
  public async read (req: Request, res: Response): Promise<Response> {
    const customers = await Customer.find()
    return res.json(customers)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const customer = await Customer.create(req.body)
    return res.json(customer)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { email, phone, localization } = req.body
    const customerForEdit = await Customer.findById(req.params.id) as CustomerInterface
    customerForEdit.email = email
    customerForEdit.phone = phone
    customerForEdit.localization = localization
    const customerUpdated = await Customer.findOneAndUpdate({ _id: req.params.id }, customerForEdit)
    return res.json(customerUpdated)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    await Customer.findByIdAndDelete({ _id: req.params.id })
    return res.json({ message: 'Apagado com sucesso!' })
  }
}

export default new CustomerController()
