import { User } from '../database/entity/User';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/create-user-dto';
import { UserResponseDTO } from '../dtos/user-response-dto';

export interface IUsersRepository {
  findByUsername(username: string): Promise<User | null>;
  create(userDTO: CreateUserDTO): Promise<UserResponseDTO>;
  update(id: string, updateDTO: UpdateUserDTO): Promise<UserResponseDTO | null>;
  findById(userId: string): Promise<UserResponseDTO | null>
}
