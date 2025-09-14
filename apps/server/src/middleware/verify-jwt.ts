import { Request, Response, NextFunction } from 'express'
import { Unathorized } from '../errors/unauthorized';
import jwt from 'jsonwebtoken'
import { env } from '../env/env';

export function verifyJWT(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new Unathorized()
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const tokenPayload = jwt.verify(token, env.JWT_SECRET) as TokenPayload
    request.user = tokenPayload

    next()

  } catch (error) {
    return response.status(403).json({ error: 'Token inválido' });
  }
}