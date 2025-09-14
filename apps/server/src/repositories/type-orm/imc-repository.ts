import { Repository } from "typeorm";
import { IIMCRepository } from "../imc-repository";
import { IMC } from "../../database/entity/IMC";
import { CreateImcDTO } from "../../dtos/imc-dto";

export class IMCRepository implements IIMCRepository {
  constructor(private repository: Repository<IMC>) { }

  async create(imcDTO: CreateImcDTO): Promise<IMC> {
    const instance = this.repository.create({
      ...imcDTO,
      idUserIMC: imcDTO.userId
    })

    const imc = await this.repository.save(instance)

    return imc
  }

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