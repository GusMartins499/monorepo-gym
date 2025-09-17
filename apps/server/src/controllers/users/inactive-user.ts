import { Request, Response } from "express";
import { makeInactiveUser } from "../../factories/inactive-user-service";

export async function inactiveUser(request: Request, response: Response) {
  const userId = request.params.id

  const service = makeInactiveUser()

  const user = await service.execute(userId)

  return response.status(200).json(user)
}