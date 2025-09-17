import { Request, Response } from "express";
import { makeFindStudents } from "../../factories/find-students-service";

export async function findStudents(request: Request, response: Response) {
  const { id, role } = request.user
  const service = makeFindStudents()

  const users = await service.execute({ id, role })

  return response.status(200).json(users)
}