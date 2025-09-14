import { Request, Response, NextFunction } from 'express'

export function requireProfessorOrAdmin(request: Request, response: Response, next: NextFunction) {
  if (request?.user?.role === 'STUDENT') {
    return response.status(403).json({
      error: 'Acesso negado. Apenas professores e administradores podem realizar esta ação.'
    });
  }
  next();
}