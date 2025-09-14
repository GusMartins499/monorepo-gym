import { AppDataSource } from "../database/data-source";
import { IMC } from "../database/entity/IMC";
import { IMCRepository } from "../repositories/type-orm/imc-repository";
import { UpdateIMCService } from "../services/update-imc-service";

export function makeUpdateImcService() {
  const imcRepository = new IMCRepository(AppDataSource.getRepository(IMC))

  const service = new UpdateIMCService(imcRepository)

  return service
}