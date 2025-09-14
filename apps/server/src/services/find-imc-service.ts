import { IIMCRepository } from "../repositories/imc-repository";
import { USER_ROLE } from "../utils/constants";

export class FindImcService {
  constructor(private repository: IIMCRepository) { }

  async execute({ id, role }: TokenPayload) {
    if (role === USER_ROLE.PROFESSOR) {
      return await this.repository.findByProfessorId(id)
    } else if (role === USER_ROLE.STUDENT) {
      return await this.repository.findByUserId(id)
    } else if (role === USER_ROLE.ADMIN) {
      return await this.repository.findAll()
    }
  }
}