import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from 'src/repo/user.repository/user.repository.service';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UserRepositoryService) {}

  async getUsersOfGame(gameID: string) {
    return await this.usersRepo.getUsersOfGame(gameID);
  }
}
