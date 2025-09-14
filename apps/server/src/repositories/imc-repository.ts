import { IMC } from "../database/entity/IMC";
import { CreateImcDTO } from "../dtos/imc-dto";

export interface IIMCRepository {
  findByUserId(userId: string): Promise<IMC[] | null>
  create(imcDTO: CreateImcDTO): Promise<IMC>
}