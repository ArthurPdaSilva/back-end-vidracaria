import { Document } from 'mongoose'

interface PersonInterface extends Document {
    email: string,
    name: string,
    cpf: number,
    phone: number,
    yearOfBirth: number,
    howOldAreYou(): string
}

export default PersonInterface
