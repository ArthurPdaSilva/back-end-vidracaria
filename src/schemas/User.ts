import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
    email: string,
    name: string,
    yearOfBirth: number,
    howOldAreYou(): string
}

const UserSchema = new Schema({
  email: String,
  name: String,
  yearOfBirth: Number
}, {
  // Basicamente, guarda a criação de cada campo
  timestamps: true
})

UserSchema.methods.howOldAreYou = function (): string {
  return `Your age is: ${new Date().getFullYear() - this.yearOfBirth}`
}

export default model<UserInterface>('User', UserSchema)
