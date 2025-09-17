import { UserNotFound } from "../errors/user-not-found";
import { IUsersRepository } from "../repositories/users-repository";

export class InactiveUSerService {
  constructor(
    private repository: IUsersRepository,
  ) { }

  async execute(userId: string) {
    const user = await this.repository.findById(userId)

    if (!user) {
      throw new UserNotFound()
    }

    return await this.repository.inactiveUser(userId)
  }
}