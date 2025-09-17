import { Repository } from "typeorm";
import { User, USER_STATUS } from "../../database/entity/User";
import { IUsersRepository } from "../users-repository";
import { CreateUserDTO, UpdateUserDTO } from "../../dtos/create-user-dto";
import { UserResponseDTO } from "../../dtos/user-response-dto";
import { USER_ROLE } from "../../utils/constants";

export class UsersRepository implements IUsersRepository {
  constructor(private repository: Repository<User>) { }

  async findProfessors(): Promise<User[] | null> {
    const professors = await this.repository.find({
      where: {
        role: USER_ROLE.PROFESSOR,
        status: USER_STATUS.ACTIVE
      },
      select: {
        id: true,
        name: true
      }
    })

    if (!professors) return null

    return professors
  }

  async patchUser(userId: string): Promise<User | null> {
    const user = await this.repository.findOne({
      where: {
        id: userId
      }
    })

    if (!user) return null

    const currentStatus = user.status
    const updateStatus = currentStatus === USER_STATUS.ACTIVE ? USER_STATUS.INACTIVE : USER_STATUS.ACTIVE
    user.status = updateStatus

    return await this.repository.save(user)
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find({
      select: {
        id: true,
        name: true,
        username: true,
        role: true,
        status: true,
      },
    })
  }

  async findStudentsByProfessorId(id: string): Promise<User[]> {
    const users = await this.repository.find({
      where: {
        professor: {
          id
        },
        role: USER_ROLE.STUDENT,
        status: USER_STATUS.ACTIVE
      }
    })

    if (users.length <= 0) return []

    return users
  }

  async findAllStudents(): Promise<User[]> {
    return await this.repository.find({
      select: {
        id: true,
        name: true,
      },
      where: {
        role: USER_ROLE.STUDENT,
        status: USER_STATUS.ACTIVE
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
    const newUserInstance = this.repository.create({
      name: userDTO.name,
      username: userDTO.username,
      password: userDTO.password,
      role: userDTO.role,
      status: userDTO.status,
      professor: { id: userDTO.professorId }
    });

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