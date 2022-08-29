import { Document } from 'mongoose'

interface ProjectionInterface extends Document {
    factoryPrice: number,
    amountOfGlasses: number,
    employee: string
}

export default ProjectionInterface
