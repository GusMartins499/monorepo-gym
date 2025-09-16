import { Request, Response } from "express";
import { makeDeleteImcService } from "../../factories/delete-imc-service";

export async function deleteImcRoute(request: Request, response: Response) {
  const id = request.params.id

  const service = makeDeleteImcService()

  await service.execute(id)

  return response.status(204).send()
}