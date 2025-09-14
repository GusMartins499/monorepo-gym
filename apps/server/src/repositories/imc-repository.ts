import { IMC } from "../database/entity/IMC";

export interface IIMCRepository {
  findByUserId(userId: string): Promise<IMC[] | null>
}