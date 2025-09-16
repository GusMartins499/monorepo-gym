import { Repository } from "typeorm";
import { IIMCRepository } from "../imc-repository";
import { IMC } from "../../database/entity/IMC";
import { CreateImcDTO, updateImcDTO } from "../../dtos/imc-dto";

export class IMCRepository implements IIMCRepository {
  constructor(private repository: Repository<IMC>) { }

  async findById(id: string): Promise<IMC | null> {
    const imc = await this.repository.findOne({
      where: { id },
    })

    if (!imc) return null

    return imc
  }

  async deleteById(id: string): Promise<void> {
    const imc = await this.repository.findOne({
      where: { id },
    })

    if (!imc) return

    await this.repository.delete(imc.id)
  }

  async findAll(): Promise<IMC[]> {
    return await this.repository.find({
      relations: {
        user: true,
      }
    })
  }

  async findByProfessorId(id: string): Promise<IMC[]> {
    const imcs = await this.repository.find({
      where: {
        user: {
          professor: {
            id
          },
        }
      },
      relations: {
        user: true,
      }
    })

    if (imcs.length <= 0) return []

    return imcs
  }

  async update(id: string, imcDTO: updateImcDTO): Promise<IMC | null> {
    const imc = await this.repository.findOne({
      where: {
        id
      }
    })

    if (!imc) return null

    imc.height = imcDTO.height
    imc.weight = imcDTO.weight
    imc.classification = imcDTO.classification
    imc.imc = imcDTO.imc

    return await this.repository.save(imc)
  }

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