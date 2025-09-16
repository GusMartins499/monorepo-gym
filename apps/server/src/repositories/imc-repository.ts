import { IMC } from "../database/entity/IMC";
import { CreateImcDTO, updateImcDTO } from "../dtos/imc-dto";

export interface IIMCRepository {
  findByUserId(userId: string): Promise<IMC[] | null>
  create(imcDTO: CreateImcDTO): Promise<IMC>
  update(id: string, imcDTO: updateImcDTO): Promise<IMC | null>
  findByProfessorId(id: string): Promise<IMC[]>
  findAll(): Promise<IMC[]>
  deleteById(id: string): Promise<void>
  findById(id: string): Promise<IMC | null>
}