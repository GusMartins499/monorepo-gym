import { AppDataSource } from "../database/data-source"
import { User } from "../database/entity/User"
import { UsersRepository } from "../repositories/type-orm/users-repository"
import { InactiveUSerService } from "../services/patch-user-service"

export function makePatchUser() {
  const userRepository = new UsersRepository(AppDataSource.getRepository(User))

  const service = new InactiveUSerService(userRepository)

  return service
}