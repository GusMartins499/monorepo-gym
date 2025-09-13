import { User } from '../database/entity/User';
import { CreateUserDTO } from '../dtos/create-user-dto';

export interface IUsersRepository {
  findByUsername(username: string): Promise<User | null>;
  create(userDTO: CreateUserDTO): Promise<User>;
}
