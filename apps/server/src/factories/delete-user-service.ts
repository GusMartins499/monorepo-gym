import { AppDataSource } from "../database/data-source";
import { IMC } from "../database/entity/IMC";
import { User } from "../database/entity/User";
import { IMCRepository } from "../repositories/type-orm/imc-repository";
import { UsersRepository } from "../repositories/type-orm/users-repository";
import { DeleteUserService } from "../services/delete-user-service";

export function makeDeleteUserService() {
  const userRepository = new UsersRepository(AppDataSource.getRepository(User))
  const imcRepository = new IMCRepository(AppDataSource.getRepository(IMC))

  const userService = new DeleteUserService(userRepository, imcRepository)

  return userService
}