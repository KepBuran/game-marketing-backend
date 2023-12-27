import { Injectable } from '@nestjs/common';
import { User } from 'src/models/User';
import users from 'src/prisma/users';
import { usersGames } from 'src/prisma/usersGames';

@Injectable()
export class UserRepositoryService {
  private usersGames = [...usersGames];
  private users = [...users];

  getUsersOfGame = async (gameID: string): Promise<User[]> => {
    const userIDs = this.usersGames
      .filter((v) => v.gameId === gameID)
      .map((v) => v.userId);

    const userOfGames = this.users.filter((v) => userIDs.includes(v.id));
    return userOfGames;
  };
}
