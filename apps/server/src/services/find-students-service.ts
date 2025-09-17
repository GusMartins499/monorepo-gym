import { IUsersRepository } from "../repositories/users-repository";
import { USER_ROLE } from "../utils/constants";

export class FindStudentsService {
  constructor(private repository: IUsersRepository) { }

  async execute({ id, role }: TokenPayload) {
    if (role === USER_ROLE.PROFESSOR) {
      return await this.repository.findStudentsByProfessorId(id)
    } else if (role === USER_ROLE.ADMIN) {
      return await this.repository.findAllStudents()
    }
  }
}