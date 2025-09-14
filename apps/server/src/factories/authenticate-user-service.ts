import { AppDataSource } from '../database/data-source';
import { User } from '../database/entity/User';
import { UserToken } from '../database/entity/UserToken';
import { AuthRepository } from '../repositories/type-orm/auth-repository';
import { UsersRepository } from '../repositories/type-orm/users-repository';
import { AuthenticateUserService } from '../services/authenticate-user-service';

export function makeAuthenticateUserService() {
  const usersRepository = new UsersRepository(AppDataSource.getRepository(User))
  const authRepository = new AuthRepository(AppDataSource.getRepository(UserToken))

  const authenticateUserService = new AuthenticateUserService(usersRepository, authRepository);

  return authenticateUserService;
}
