import AppError from './app-error'

export class UserNotFound extends AppError {
  constructor() {
    super({ message: 'User not found', statusCode: 404 })
  }
}
