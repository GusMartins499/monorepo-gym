import { AppDataSource } from "../database/data-source"
import { User } from "../database/entity/User"
import { UsersRepository } from "../repositories/type-orm/users-repository"
import { FindProfessorsService } from "../services/find-professors-service"

export function makeFindProfessors() {
  const userRepository = new UsersRepository(AppDataSource.getRepository(User))

  const service = new FindProfessorsService(userRepository)

  return service
}