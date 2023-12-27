import { Injectable } from '@nestjs/common';
import { User } from '../models/User';
import { UserRepositoryService } from 'src/repo/user.repository/user.repository.service';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UserRepositoryService) {}

  async getUsersOfGame(gameID: string) {
    return await this.usersRepo.getUsersOfGame(gameID);
  }

  async login(
    username: string,
    password: string,
  ): Promise<User | { error: string }> {
    const user = await this.usersRepo.getUserByUsername(username);

    if (!user || user.password !== password) {
      return { error: 'Invalid username or password' };
    }
    return user;
  }

  async signIn(
    username: string,
    password: string,
  ): Promise<User | { error: string }> {
    const user = await this.usersRepo.getUserByUsername(username);

    if (user) {
      return { error: 'This username is already occupied' };
    }

    const newUser = await this.usersRepo.createUser(username, password);

    return newUser;
  }
}
