import { Repository } from "typeorm";
import { hash } from 'bcrypt'
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
    const saltRounds = 12;
    const hashedPassword = await hash(userDTO.password, saltRounds);

    const newUserInstance = this.repository.create({
      ...userDTO,
      password: hashedPassword
    });

    return await this.repository.save(newUserInstance);
  }
}