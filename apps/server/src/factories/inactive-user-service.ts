import { AppDataSource } from "../database/data-source"
import { User } from "../database/entity/User"
import { UsersRepository } from "../repositories/type-orm/users-repository"
import { InactiveUSerService } from "../services/inactive-user-service"

export function makeInactiveUser() {
  const userRepository = new UsersRepository(AppDataSource.getRepository(User))

  const service = new InactiveUSerService(userRepository)

  return service
}