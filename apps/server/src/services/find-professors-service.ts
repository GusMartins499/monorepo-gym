import { IUsersRepository } from "../repositories/users-repository";

export class FindProfessorsService {
  constructor(private repository: IUsersRepository) { }

  async execute() {
    return await this.repository.findProfessors()
  }
}