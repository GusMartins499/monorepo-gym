import { AppDataSource } from "../database/data-source";
import { IMC } from "../database/entity/IMC";
import { IMCRepository } from "../repositories/type-orm/imc-repository";
import { DeleteIMCService } from "../services/delete-imc-service";

export function makeDeleteImcService() {
  const imcRepository = new IMCRepository(AppDataSource.getRepository(IMC))

  const service = new DeleteIMCService(imcRepository)

  return service
}