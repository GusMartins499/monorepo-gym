import { Repository } from "typeorm";
import { User } from "../../database/entity/User";
import { IUsersRepository } from "../users-repository";
import { CreateUserDTO, UpdateUserDTO } from "../../dtos/create-user-dto";
import { UserResponseDTO } from "../../dtos/user-response-dto";

export class UsersRepository implements IUsersRepository {
  constructor(private repository: Repository<User>) { }

  async findById(id: string): Promise<UserResponseDTO | null> {
    const user = await this.repository.findOne({
      where: { id }
    })
    if (!user) return null

    return user
  }

  async update(id: string, updateDTO: UpdateUserDTO): Promise<UserResponseDTO | null> {
    const user = await this.repository.findOne({
      where: { id },
      select: {
        id: true,
        name: true,
        username: true,
        status: true,
        role: true,
      }
    })
    if (!user) return null

    user.name = updateDTO.name
    user.username = updateDTO.username

    return await this.repository.save(user)
  }

  async findByUsername(username: string): Promise<UserResponseDTO | null> {
    return await this.repository.findOne({
      where: { username }
    });
  }

  async create(userDTO: CreateUserDTO): Promise<UserResponseDTO> {
    const newUserInstance = this.repository.create(userDTO);

    const user = await this.repository.save(newUserInstance);

    return {
      id: user.id,
      name: user.name,
      username: user.username,
      status: user.status,
      role: user.role,
    }
  }
}