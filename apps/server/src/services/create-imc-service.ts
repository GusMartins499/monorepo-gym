import { IIMCRepository } from "../repositories/imc-repository";
import { calculateIMC } from "../utils/calculate-imc";
import { classifyIMC, mapImcClassificationToLabel } from "../utils/imc-classification";

interface CreateIMCServiceProps {
  height: number
  weight: number
  userId: string
}

export class CreateIMCService {
  constructor(private imcRepository: IIMCRepository) { }

  async execute({ height, weight, userId }: CreateIMCServiceProps) {
    const imc = calculateIMC({ height, weight })
    const classification = classifyIMC(Number(imc))

    const createdImc = await this.imcRepository.create({ height, weight, imc: Number(imc), classification, userId })

    return {
      ...createdImc,
      classification: mapImcClassificationToLabel(createdImc.classification)
    }
  }
}