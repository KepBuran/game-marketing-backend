import { Injectable } from '@nestjs/common';
import { User } from 'src/models/User';
import { UserByGame } from 'src/models/UserByGame';
import users from '../../prisma/users';
import { usersGames } from 'src/prisma/usersGames';

@Injectable()
export class UserRepositoryService {
  private usersGames = [...usersGames];
  private users = [...users];

  getUsersOfGame = async (gameID: string): Promise<UserByGame[]> => {
    const usersByGame = this.usersGames
      .filter((v) => v.gameId === gameID)
      .map((v) => v);

    const userIDs = usersByGame.map((v) => v.userId);

    const userOfGames = this.users.filter((v) => userIDs.includes(v.id));
    return userOfGames.map((v) => ({
      ...v,
      ...{ boughtDate: usersByGame.find((u) => u.userId === v.id)?.boughtDate },
    }));
  };

  getUserById = async (userID: string): Promise<User> => {
    return this.users.find((v) => v.id === userID);
  };

  getUserByUsername = async (username: string): Promise<User> => {
    return this.users.find((v) => v.username === username);
  };

  async createUser(username: string, password: string) {
    const newUser: User = {
      id: this.users.length.toString(),
      username,
      password,
      registration_date: new Date(),
      role: 'user',
    };

    users.push(newUser);

    return newUser;
  }
}
