export default class AppError extends Error {
  message: string;
  statusCode: number;

  constructor({ message, statusCode }: { message: string; statusCode: number }) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}