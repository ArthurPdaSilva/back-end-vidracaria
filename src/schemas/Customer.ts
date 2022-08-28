import { Schema, model, Document } from 'mongoose'

interface CustomerInterface extends Document {
    email: string,
    name: string,
    cpf: number,
    localization: string,
    phone: number,
    yearOfBirth: number,
    howOldAreYou(): string
}

const CustomerSchema = new Schema({
  email: String,
  name: String,
  cpf: Number,
  localization: String,
  phone: Number,
  yearOfBirth: Number
}, {
  // Basicamente, guarda a criação de cada campo
  timestamps: true
})

CustomerSchema.methods.howOldAreYou = function (): string {
  return `Your age is: ${new Date().getFullYear() - this.yearOfBirth}`
}

export default model<CustomerInterface>('Customer', CustomerSchema)
