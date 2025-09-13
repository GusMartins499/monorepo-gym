import { Request, Response } from "express";
import { createUserSchema } from "../../dtos/create-user-dto";
import { makeUserService } from "../../factories/create-user-service";

export async function createUserRoute(request: Request, response: Response) {
  const body = createUserSchema.parse(request.body);

  const userService = makeUserService()

  const user = await userService.execute(body)

  return response.status(201).json(user)
}