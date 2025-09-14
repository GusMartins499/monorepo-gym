import { UserTokenDTO } from "../dtos/auth-dto";

export interface IAuthRepository {
  create(data: UserTokenDTO): Promise<void>
}