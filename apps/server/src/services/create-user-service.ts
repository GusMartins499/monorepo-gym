import { CreateUserDTO } from "../dtos/create-user-dto";
import { UserAlreadyExists } from "../errors/user-already-exists";
import { IUsersRepository } from "../repositories/users-repository";

export class CreateUserService {
  constructor(private repository: IUsersRepository) { }

  async execute(userDTO: CreateUserDTO) {
    const existingUser = await this.repository.findByUsername(userDTO.username);

    if (existingUser) {
      throw new UserAlreadyExists()
    }

    return this.repository.create(userDTO);
  }
}