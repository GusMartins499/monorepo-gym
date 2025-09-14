import { Request, Response } from "express";
import { updateImcRequestBodySchema } from "../../dtos/imc-dto";
import { makeUpdateImcService } from "../../factories/update-imc-service";

export async function updateImc(request: Request, response: Response) {
  const body = updateImcRequestBodySchema.parse(request.body)
  const id = request.params.id

  const service = makeUpdateImcService()

  const imc = await service.execute({ id, height: body.height, weight: body.weight })

  return response.status(200).json(imc)
}