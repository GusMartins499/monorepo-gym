import AppError from './app-error'

export class UserAlreadyExists extends AppError {
  constructor() {
    super({ message: 'User already exists', statusCode: 409 })
  }
}
