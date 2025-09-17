import { IUsersRepository } from "../repositories/users-repository";

export class FindUsersService {
  constructor(private repository: IUsersRepository) { }

  async execute() {
    return await this.repository.findAll()
  }
}