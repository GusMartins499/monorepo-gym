import { AppDataSource } from "../database/data-source"
import { IMC } from "../database/entity/IMC"
import { IMCRepository } from "../repositories/type-orm/imc-repository"
import { FindImcService } from "../services/find-imc-service"

export function makeFindImc() {
  const imcRepository = new IMCRepository(AppDataSource.getRepository(IMC))

  const service = new FindImcService(imcRepository)

  return service
}