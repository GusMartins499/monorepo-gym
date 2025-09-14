import { AppDataSource } from "../database/data-source";
import { IMC } from "../database/entity/IMC";
import { IMCRepository } from "../repositories/type-orm/imc-repository";
import { CreateIMCService } from "../services/create-imc-service";

export function makeImcService() {
  const imcRepository = new IMCRepository(AppDataSource.getRepository(IMC))

  const service = new CreateIMCService(imcRepository)

  return service
}