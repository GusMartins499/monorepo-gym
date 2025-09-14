import { Request, Response } from 'express';
import { authenticateUserSchema } from '../../dtos/authenticate-user-dto';
import { makeAuthenticateUserService } from '../../factories/authenticate-user-service';
import { JWT_EXPIRES_IN_7_DAYS_IN_MILISECONDS } from '../../utils/constants';

export async function authenticateUser(request: Request, response: Response) {
  const body = authenticateUserSchema.parse(request.body)

  const authenticateUserService = makeAuthenticateUserService();

  const { username, password } = body

  const result = await authenticateUserService.execute({ username, password });

  response.cookie('refreshToken', result.refreshToken, {
    path: '/',
    secure: true,
    sameSite: true,
    httpOnly: true,
    maxAge: JWT_EXPIRES_IN_7_DAYS_IN_MILISECONDS,
  });

  return response.json({ token: result.token });
}
