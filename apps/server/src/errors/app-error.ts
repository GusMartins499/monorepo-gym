export default class AppError extends Error {
  message: string;
  statusCode: number;
  codeError?: string;

  constructor({ message, statusCode, codeError }: { message: string; statusCode: number, codeError?: string }) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.codeError = codeError
  }
}