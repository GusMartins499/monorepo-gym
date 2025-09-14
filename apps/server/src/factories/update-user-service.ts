import { AppDataSource } from "../database/data-source";
import { User } from "../database/entity/User";
import { UsersRepository } from "../repositories/type-orm/users-repository";
import { UpdateUserService } from "../services/update-user-service";

export function makeUpdateUserService() {
  const userRepository = new UsersRepository(AppDataSource.getRepository(User))
  const userService = new UpdateUserService(userRepository)

  return userService
}