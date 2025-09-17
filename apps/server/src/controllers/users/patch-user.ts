import { Request, Response } from "express";
import { makePatchUser } from "../../factories/patch-user-service";

export async function patchUser(request: Request, response: Response) {
  const userId = request.params.id

  const service = makePatchUser()

  const user = await service.execute(userId)

  return response.status(200).json(user)
}