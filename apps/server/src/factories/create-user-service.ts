import { AppDataSource } from "../database/data-source";
import { User } from "../database/entity/User";
import { UsersRepository } from "../repositories/type-orm/users-repository";
import { CreateUserService } from "../services/create-user-service";

export function makeUserService() {
  const userRepository = new UsersRepository(AppDataSource.getRepository(User))
  const userService = new CreateUserService(userRepository)

  return userService
}