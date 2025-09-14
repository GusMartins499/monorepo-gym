import { Request, Response } from "express";
import { makeDeleteUserService } from "../../factories/delete-user-service";

export async function deleteUserRoute(request: Request, response: Response) {
  const userId = request.params.id

  const service = makeDeleteUserService()

  await service.execute(userId)

  return response.status(204).send()
}