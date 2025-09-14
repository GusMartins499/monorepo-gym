import { UpdateUserDTO } from "../dtos/create-user-dto";
import { Unathorized } from "../errors/unauthorized";
import { UserNotFound } from "../errors/user-not-found";
import { IUsersRepository } from "../repositories/users-repository";
import { USER_ROLE } from "../utils/constants";

export class UpdateUserService {
  constructor(private repository: IUsersRepository) { }

  async execute(id: string, requestUpdatedBy: USER_ROLE, updateUserDTO: UpdateUserDTO) {
    const existingUser = await this.repository.findById(id);

    if (!existingUser) {
      throw new UserNotFound()
    }

    if (existingUser.role !== 'STUDENT' && requestUpdatedBy === 'PROFESSOR') {
      throw new Unathorized()
    }

    return this.repository.update(id, updateUserDTO)
  }
}