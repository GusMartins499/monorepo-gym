import { AppDataSource } from "../database/data-source"
import { User } from "../database/entity/User"
import { UsersRepository } from "../repositories/type-orm/users-repository"
import { FindStudentsService } from "../services/find-students-service"

export function makeFindStudents() {
  const userRepository = new UsersRepository(AppDataSource.getRepository(User))

  const service = new FindStudentsService(userRepository)

  return service
}