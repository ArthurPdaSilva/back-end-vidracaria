import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async read (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)
    return res.json(user)
  }
}

export default new UserController()
