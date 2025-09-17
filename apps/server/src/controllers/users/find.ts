import { Request, Response } from "express";
import { makeFindUsers } from "../../factories/find-users-service";

export async function findUsers(_request: Request, response: Response) {
  const service = makeFindUsers()

  const users = await service.execute()

  return response.status(200).json(users)
}