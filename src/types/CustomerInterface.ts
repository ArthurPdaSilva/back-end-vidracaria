import PersonInterface from './PersonInterface'

interface CustomerInterface extends PersonInterface {
    localization: string,
}

export default CustomerInterface
