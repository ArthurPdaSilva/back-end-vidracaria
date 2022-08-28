import { Document } from 'mongoose'

interface ProjectionInterface extends Document {
    factoryPrice: number,
    amountOfGlasses: number,
}

export default ProjectionInterface
