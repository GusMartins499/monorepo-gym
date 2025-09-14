import { Request, Response } from "express";
import { updateUserSchema } from "../../dtos/create-user-dto";
import { makeUpdateUserService } from "../../factories/update-user-service";

export async function updateUserRoute(request: Request, response: Response) {
  const body = updateUserSchema.parse(request.body)
  const userId = request.params.id
  const requestUpdatedBy = request.user.role

  const userService = makeUpdateUserService()

  const user = await userService.execute(userId, requestUpdatedBy, body)

  return response.status(200).json(user)
}