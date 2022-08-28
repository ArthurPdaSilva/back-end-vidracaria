import PersonInterface from './PersonInterface'

interface EmployeeInterface extends PersonInterface {
    jobPosition: string,
    daily: number,
}

export default EmployeeInterface
