import { UserNotFound } from "../errors/user-not-found";
import { IIMCRepository } from "../repositories/imc-repository";
import { IUsersRepository } from "../repositories/users-repository";

export class DeleteUserService {
  constructor(
    private repository: IUsersRepository,
    private imcRepository: IIMCRepository
  ) { }

  async execute(userId: string) {
    const user = await this.repository.findById(userId)

    if (!user) {
      throw new UserNotFound()
    }

    await this.imcRepository.findByUserId(userId)

    await this.repository.delete(userId)
  }
}