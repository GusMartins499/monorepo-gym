import { Repository } from "typeorm";
import { User } from "../../database/entity/User";
import { IUsersRepository } from "../users-repository";
import { CreateUserDTO } from "../../dtos/create-user-dto";

export class UsersRepository implements IUsersRepository {
  constructor(private repository: Repository<User>) { }

  async findByUsername(username: string): Promise<User | null> {
    return await this.repository.findOne({
      where: { username }
    });
  }

  async create(userDTO: CreateUserDTO): Promise<User> {
    const newUserInstance = this.repository.create(userDTO);

    return await this.repository.save(newUserInstance);
  }
}