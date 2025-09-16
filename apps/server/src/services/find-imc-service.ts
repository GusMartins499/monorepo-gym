import { QuerySearchSchema } from "../dtos/imc-dto";
import { IIMCRepository } from "../repositories/imc-repository";
import { USER_ROLE } from "../utils/constants";

interface FindImcServiceProps {
  tokenPayload: TokenPayload,
  query: QuerySearchSchema
}

export class FindImcService {
  constructor(private repository: IIMCRepository) { }

  async execute({ query, tokenPayload }: FindImcServiceProps) {
    if (tokenPayload.role === USER_ROLE.PROFESSOR) {
      return await this.repository.findByProfessorId(tokenPayload.id, query)
    } else if (tokenPayload.role === USER_ROLE.STUDENT) {
      return await this.repository.findByUserId(tokenPayload.id)
    } else if (tokenPayload.role === USER_ROLE.ADMIN) {
      return await this.repository.findAll(query)
    }
  }
}