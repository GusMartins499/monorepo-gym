import AppError from './app-error'

export class WrongCredentials extends AppError {
  constructor() {
    super({ message: 'Wrong credentials', statusCode: 409 })
  }
}
