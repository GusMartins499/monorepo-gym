import jwt from 'jsonwebtoken';
import { IUsersRepository } from '../repositories/users-repository';
import { AuthenticateUserDto } from '../dtos/authenticate-user-dto';
import { compare } from 'bcrypt';
import { WrongCredentials } from '../errors/wrong-credentials';
import { JWT_EXPIRES_IN_15_MINUTES_IN_SECONDS, JWT_EXPIRES_IN_7_DAYS_IN_SECONDS } from '../utils/constants'
import { IAuthRepository } from '../repositories/auth-repository';
import dayjs from 'dayjs';
import { env } from '../env/env';

export class AuthenticateUserService {
  constructor(
    private usersRepository: IUsersRepository,
    private authRepository: IAuthRepository
  ) { }

  async execute({ username, password }: AuthenticateUserDto) {
    const user = await this.usersRepository.findByUsername(username);

    if (!user) {
      throw new WrongCredentials()
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new WrongCredentials()
    }

    const token = jwt.sign({
      id: user.id,
      role: user.role
    }, env.JWT_SECRET, { expiresIn: JWT_EXPIRES_IN_15_MINUTES_IN_SECONDS });

    const refreshToken = jwt.sign({
      id: user.id,
      role: user.role
    }, env.JWT_SECRET, { expiresIn: JWT_EXPIRES_IN_7_DAYS_IN_SECONDS });

    const currentDate = dayjs()
    const currentDatePlus7days = currentDate.add(7, 'days').format()

    await this.authRepository.create({ userId: user.id, expiresAt: currentDatePlus7days, refreshToken })

    return {
      token,
      refreshToken
    };
  }
}
