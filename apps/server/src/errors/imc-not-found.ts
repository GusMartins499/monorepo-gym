import AppError from './app-error'

export class IMCNotFound extends AppError {
  constructor() {
    super({ message: 'IMC not found', statusCode: 404 })
  }
}
