import { Repository } from "typeorm";
import { IIMCRepository } from "../imc-repository";
import { IMC } from "../../database/entity/IMC";

export class IMCRepository implements IIMCRepository {
  constructor(private repository: Repository<IMC>) { }

  async findByUserId(userId: string): Promise<IMC[] | null> {
    const imcs = await this.repository.find({
      where: {
        idUserIMC: userId
      }
    })

    if (imcs.length <= 0) return null

    return imcs
  }
}