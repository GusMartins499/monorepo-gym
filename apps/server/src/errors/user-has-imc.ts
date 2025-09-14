import AppError from './app-error'

export class UserHasIMC extends AppError {
  constructor() {
    super({ message: 'User has IMC and can not be deleted', statusCode: 404 })
  }
}
