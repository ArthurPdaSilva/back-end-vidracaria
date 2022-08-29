import { Request, Response } from 'express'
import Projection from '../schemas/Projection'
import ProjectionInterface from '../types/ProjectionInterface'

class ProjectionController {
  async read (req: Request, res: Response): Promise<Response> {
    const projections = await Projection.find()
    return res.json(projections)
  }

  async create (req: Request, res: Response): Promise<Response> {
    const projectionEdit = req.body
    projectionEdit.employee = req.headers.employeeid
    const projection = await Projection.create(projectionEdit)
    return res.json(projection)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { email, phone, jobPosition, daily } = req.body
    const ProjectionForEdit = await Projection.findById(req.params.id) as ProjectionInterface
    const ProjectionUpdated = await Projection.findOneAndUpdate({ _id: req.params.id }, ProjectionForEdit)
    return res.json(ProjectionUpdated)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    await Projection.findByIdAndDelete({ _id: req.params.id })
    return res.json({ message: 'Apagado com sucesso!' })
  }
}

export default new ProjectionController()
