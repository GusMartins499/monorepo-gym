import { Request, Response, NextFunction } from 'express'

export function requireAdmin(request: Request, response: Response, next: NextFunction) {
  if (request?.user?.role !== 'ADMIN') {
    return response.status(403).json({
      error: 'Acesso negado. Apenas administradores podem realizar esta ação.'
    });
  }
  next();
}