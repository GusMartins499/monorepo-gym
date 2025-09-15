import { Request, Response } from "express";
import { makeFindImc } from "../../factories/find-imc-service";
import { toHTTP } from "../../utils/imc-to-http";

export async function findImc(request: Request, response: Response) {
  const service = makeFindImc()
  const { id, role } = request.user

  const imcs = await service.execute({ id, role })

  if (!imcs) {
    return response.status(500).json({ message: 'Internal error' })
  }

  const presenterIMC = imcs.map(toHTTP)

  return response.status(200).json(presenterIMC)
}