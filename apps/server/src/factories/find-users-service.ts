import { AppDataSource } from "../database/data-source"
import { User } from "../database/entity/User"
import { UsersRepository } from "../repositories/type-orm/users-repository"
import { FindUsersService } from "../services/find-users-service"

export function makeFindUsers() {
  const useRepository = new UsersRepository(AppDataSource.getRepository(User))

  const service = new FindUsersService(useRepository)

  return service
}