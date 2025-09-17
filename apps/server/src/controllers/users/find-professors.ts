import { Request, Response } from "express";
import { makeFindStudents } from "../../factories/find-students-service";
import { makeFindProfessors } from "../../factories/find-professors-service";

export async function findProfessors(_request: Request, response: Response) {
  const service = makeFindProfessors()

  const professors = await service.execute()

  return response.status(200).json(professors)
}