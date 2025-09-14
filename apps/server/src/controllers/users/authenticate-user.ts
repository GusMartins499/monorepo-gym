import { Request, Response } from 'express';
import { authenticateUserSchema } from '../../dtos/authenticate-user-dto';
import { makeAuthenticateUserService } from '../../factories/authenticate-user-service';

export async function authenticateUser(request: Request, response: Response) {
  const body = authenticateUserSchema.parse(request.body)

  const authenticateUserService = makeAuthenticateUserService();

  const { username, password } = body

  const result = await authenticateUserService.execute({ username, password });

  return response.status(200).json(result);
}
