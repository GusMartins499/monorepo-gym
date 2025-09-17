import { User, USER_STATUS } from '../database/entity/User';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/create-user-dto';
import { UserResponseDTO } from '../dtos/user-response-dto';

export interface IUsersRepository {
  findByUsername(username: string): Promise<User | null>;
  create(userDTO: CreateUserDTO): Promise<UserResponseDTO>;
  update(id: string, updateDTO: UpdateUserDTO): Promise<UserResponseDTO | null>;
  findById(userId: string): Promise<UserResponseDTO | null>
  delete(userId: string): Promise<void>
  findStudentsByProfessorId(id: string): Promise<User[]>
  findAllStudents(): Promise<User[]>
  findAll(): Promise<User[]>
  patchUser(userId: string): Promise<User | null>
}
