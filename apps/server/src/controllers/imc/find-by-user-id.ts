import { Request, Response } from "express";
import { makeFindIMCByUserId } from "../../factories/find-imc-by-user-id-service";
import { toHTTP } from "../../utils/imc-to-http";

export async function findByUserId(request: Request, response: Response) {
  const userId = request.params.id

  const service = makeFindIMCByUserId()

  const imcs = await service.execute(userId)

  if (!imcs) {
    return response.status(500).json({ message: 'Internal error' })
  }
  const presenterIMC = imcs.map(toHTTP)

  return response.status(200).json(presenterIMC)
}