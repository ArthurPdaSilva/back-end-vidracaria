import { Schema, model } from 'mongoose'
import ProjectionInterface from '../types/ProjectionInterface'

const ProjectionSchema = new Schema({
  factoryPrice: Number,
  amountOfGlasses: Number,
  employee: {
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }
}, { timestamps: true })

export default model<ProjectionInterface>('Projection', ProjectionSchema)
