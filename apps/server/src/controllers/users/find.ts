import { Request, Response } from "express";
import { makeFindUsers } from "../../factories/find-users-service";

export async function findUsers(request: Request, response: Response) {
  const { id, role } = request.user
  const service = makeFindUsers()

  const users = await service.execute({ id, role })

  return response.status(200).json(users)
}