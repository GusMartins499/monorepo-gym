import AppError from './app-error'

export class Unathorized extends AppError {
  constructor() {
    super({ message: 'Unathorized', statusCode: 401 })
  }
}
