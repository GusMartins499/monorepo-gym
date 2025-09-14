import { UserNotFound } from "../errors/user-not-found";
import { IIMCRepository } from "../repositories/imc-repository";
import { IUsersRepository } from "../repositories/users-repository";

export class FindIMCByUserId {
  constructor(
    private repository: IIMCRepository,
    private userRepository: IUsersRepository
  ) { }

  async execute(userId: string) {
    const user = await this.userRepository.findById(userId)

    if (!user) {
      throw new UserNotFound()
    }

    return await this.repository.findByUserId(userId)
  }
}