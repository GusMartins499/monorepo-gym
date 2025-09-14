import { AppDataSource } from "../database/data-source"
import { IMC } from "../database/entity/IMC"
import { User } from "../database/entity/User"
import { IMCRepository } from "../repositories/type-orm/imc-repository"
import { UsersRepository } from "../repositories/type-orm/users-repository"
import { FindIMCByUserId } from "../services/find-imc-by-user-id-service"

export function makeFindIMCByUserId() {
  const imcRepository = new IMCRepository(AppDataSource.getRepository(IMC))
  const userRepository = new UsersRepository(AppDataSource.getRepository(User))

  const userService = new FindIMCByUserId(imcRepository, userRepository)

  return userService
}