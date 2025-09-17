import { UserHasIMC } from "../errors/user-has-imc";
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

    const hasImc = await this.imcRepository.findByUserId(userId)

    if (hasImc) {
      throw new UserHasIMC()
    }

    await this.repository.delete(userId)
  }
}