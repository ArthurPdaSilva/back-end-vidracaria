import { Schema, model } from 'mongoose'
import EmployeeInterface from '../types/EmployeeInterface'

const EmployeeSchema = new Schema({
  name: String,
  jobPosition: String,
  daily: Number,
  remuneration: Number,
  localization: String,
  email: String,
  phone: Number,
  cpf: Number,
  rg: Number
}, {
  // Basicamente, guarda a criação de cada campo
  timestamps: true
})

export default model<EmployeeInterface>('employee', EmployeeSchema)
