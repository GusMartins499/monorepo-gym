import { Request, Response, NextFunction } from 'express'
import { Unathorized } from '../errors/unauthorized';
import jwt from 'jsonwebtoken'
import { env } from '../env/env';

interface TokenPayload {
  id: string
  role: 'ADMIN' | 'STUDENT' | 'PROFESSOR'
}

export function verifyJWT(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new Unathorized()
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const tokenPayload = jwt.verify(token, env.JWT_SECRET) as TokenPayload

    request.user.id = tokenPayload.id
    request.user.role = tokenPayload.role

    next()

  } catch (error) {
    return response.status(403).json({ error: 'Token inválido' });
  }
}