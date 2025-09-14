import { Repository } from "typeorm";
import { IAuthRepository } from "../auth-repository";
import { UserTokenDTO } from "../../dtos/auth-dto";
import { UserToken } from "../../database/entity/UserToken";

export class AuthRepository implements IAuthRepository {
  constructor(private repository: Repository<UserToken>) { }

  async create(userTokenDTO: UserTokenDTO): Promise<void> {
    const instance = this.repository.create(userTokenDTO);

    await this.repository.save(instance)
  }
}