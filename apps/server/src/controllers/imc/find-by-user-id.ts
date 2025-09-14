import { Request, Response } from "express";
import { makeFindIMCByUserId } from "../../factories/find-imc-by-user-id-service";

export async function findByUserId(request: Request, response: Response) {
  const userId = request.params.id

  const service = makeFindIMCByUserId()

  const imcs = await service.execute(userId)

  return response.status(200).json(imcs)
}