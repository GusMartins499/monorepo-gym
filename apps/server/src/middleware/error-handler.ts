import { NextFunction, Request, Response } from "express";
import { getErrorMessage } from "../utils/get-error-message";
import AppError from "../errors/app-error";

export default function errorHandler(
  error: unknown,
  _request: Request,
  response: Response,
  _next: NextFunction
) {

  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      error: {
        message: error.message,
      },
    });
    return;
  }

  response.status(500).json({
    error: {
      message:
        getErrorMessage(error) ||
        "An error occurred",
    },
  });
}