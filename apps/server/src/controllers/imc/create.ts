import { Request, Response } from "express";
import { makeImcService } from "../../factories/create-imc-service";
import { createImcRequestBodySchema, createImcSchema } from "../../dtos/imc-dto";

export async function createImc(request: Request, response: Response) {
  const body = createImcRequestBodySchema.parse(request.body)

  const service = makeImcService()

  const imc = await service.execute(body)

  return response.status(200).json(imc)
}