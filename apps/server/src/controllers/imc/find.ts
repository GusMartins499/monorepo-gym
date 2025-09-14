import { Request, Response } from "express";
import { makeFindImc } from "../../factories/find-imc-service";

export async function findImc(request: Request, response: Response) {
  const service = makeFindImc()
  const { id, role } = request.user

  const imcs = await service.execute({ id, role })

  return response.status(200).json(imcs)
}