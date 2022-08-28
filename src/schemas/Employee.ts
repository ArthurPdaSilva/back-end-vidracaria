import { Schema, model, Document } from 'mongoose'

interface EmployeeInterface extends Document {
    name: string,
    job_position: string,
    daily: number,
    email: string,
    cpf: number
}

const EmployeeSchema = new Schema({
  name: String,
  job_position: String,
  daily: Number,
  email: String,
  cpf: Number
}, {
  // Basicamente, guarda a criação de cada campo
  timestamps: true
})

export default model<EmployeeInterface>('employee', EmployeeSchema)
