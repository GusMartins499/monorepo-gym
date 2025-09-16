import { Request, Response } from "express";
import { makeFindImc } from "../../factories/find-imc-service";
import { toHTTP } from "../../utils/imc-to-http";
import { querySearchSchema } from "../../dtos/imc-dto";

export async function findImc(request: Request, response: Response) {
  const service = makeFindImc()
  const query = querySearchSchema.parse(request.query)
  const { id, role } = request.user

  const imcs = await service.execute({ query, tokenPayload: { id, role } })

  if (!imcs) {
    return response.status(500).json({ message: 'Internal error' })
  }

  const presenterIMC = imcs.map(toHTTP)

  return response.status(200).json(presenterIMC)
}