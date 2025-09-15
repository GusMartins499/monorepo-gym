import { Repository } from "typeorm";
import { User } from "../../database/entity/User";
import { IUsersRepository } from "../users-repository";
import { CreateUserDTO, UpdateUserDTO } from "../../dtos/create-user-dto";
import { UserResponseDTO } from "../../dtos/user-response-dto";
import { USER_ROLE } from "../../utils/constants";

export class UsersRepository implements IUsersRepository {
  constructor(private repository: Repository<User>) { }

  async findByProfessorId(id: string): Promise<User[]> {
    const users = await this.repository.find({
      where: {
        professor: {
          id
        },
        role: USER_ROLE.STUDENT
      }
    })

    if (users.length <= 0) return []

    return users
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find({
      select: {
        id: true,
        name: true,
      },
      where: {
        role: USER_ROLE.STUDENT
      }
    })
  }

  async delete(id: string): Promise<void> {
    const user = await this.repository.findOne({
      where: { id },
    })

    if (!user) return

    await this.repository.delete(user.id)
  }

  async findById(id: string): Promise<UserResponseDTO | null> {
    const user = await this.repository.findOne({
      where: { id },
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

  async findByUsername(username: string): Promise<User | null> {
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