import { CreateUserDTO } from "../dtos/create-user-dto";
import { UserAlreadyExists } from "../errors/user-already-exists";
import { IUsersRepository } from "../repositories/users-repository";
import { hash } from 'bcrypt'

export class CreateUserService {
  constructor(private repository: IUsersRepository) { }

  async execute(userDTO: CreateUserDTO) {
    const existingUser = await this.repository.findByUsername(userDTO.username);

    if (existingUser) {
      throw new UserAlreadyExists()
    }

    const saltRounds = 12;
    const hashedPassword = await hash(userDTO.password, saltRounds);

    const user = {
      ...userDTO,
      password: hashedPassword
    }
    return this.repository.create(user);
  }
}