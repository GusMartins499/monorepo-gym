import { IMCNotFound } from "../errors/imc-not-found";
import { IIMCRepository } from "../repositories/imc-repository";

export class DeleteIMCService {
  constructor(
    private imcRepository: IIMCRepository
  ) { }

  async execute(id: string) {
    const imc = await this.imcRepository.findById(id)

    if (!imc) {
      throw new IMCNotFound()
    }
    return await this.imcRepository.deleteById(id)
  }
}