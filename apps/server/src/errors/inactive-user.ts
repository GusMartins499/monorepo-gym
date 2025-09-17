import AppError from './app-error'

export class UserInactive extends AppError {
  constructor() {
    super({ message: 'User is inactive, please contact support', statusCode: 409 })
  }
}
