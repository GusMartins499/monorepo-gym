import { Repository } from "typeorm";
import { IIMCRepository } from "../imc-repository";
import { IMC } from "../../database/entity/IMC";
import { CreateImcDTO, QuerySearchSchema, updateImcDTO } from "../../dtos/imc-dto";

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

  async findAll(query: QuerySearchSchema): Promise<IMC[]> {
    const qb = this.repository.createQueryBuilder("imc")
      .leftJoinAndSelect("imc.user", "user");

    if (query?.search) {
      qb.where(
        "user.name COLLATE SQL_Latin1_General_CP1_CI_AI LIKE :name",
        { name: `%${query.search}%` }
      );
    }

    return qb.getMany();
  }

  async findByProfessorId(id: string, query: QuerySearchSchema): Promise<IMC[]> {
    const qb = this.repository.createQueryBuilder("imc")
      .leftJoinAndSelect("imc.user", "user")
      .leftJoin("user.professor", "professor")
      .where("professor.id = :id", { id });

    if (query?.search) {
      qb.andWhere(
        "user.name COLLATE SQL_Latin1_General_CP1_CI_AI LIKE :name",
        { name: `%${query.search}%` }
      );
    }

    return qb.getMany();
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