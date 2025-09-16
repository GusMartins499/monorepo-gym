import { IIMCRepository } from "../repositories/imc-repository";
import { calculateIMC } from "../utils/calculate-imc";
import { classifyIMC, mapImcClassificationToLabel } from "../utils/imc-classification";

interface UpdateIMCServiceProps {
  id: string
  height: number
  weight: number
}

export class UpdateIMCService {
  constructor(private imcRepository: IIMCRepository) { }

  async execute({ id, height, weight }: UpdateIMCServiceProps) {
    const imc = calculateIMC({ height, weight })
    const classification = classifyIMC(Number(imc))

    const updatedImc = await this.imcRepository.update(id, { height, weight, imc: Number(imc), classification })

    if (!updatedImc) return null

    return updatedImc
  }
}