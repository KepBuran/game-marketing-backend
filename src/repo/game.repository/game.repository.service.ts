import { Injectable } from '@nestjs/common';
import { Game } from 'src/models/Game';
import { UserGame } from 'src/models/UserGame';
import { games } from 'src/prisma/games';
import { usersGames } from 'src/prisma/usersGames';

@Injectable()
export class GameRepository {
  private games = [...games];
  private usersGames = [...usersGames];

  filterGamesBy = async (field: string, value: string) => {
    return this.games.filter((v) => v[field] === value);
  };

  getGamesOfUser = async (userID: string): Promise<Game[]> => {
    const gameIDs = this.usersGames
      .filter((v) => v.userId === userID)
      .map((v) => v.gameId);

    const gamesOfUser = this.games.filter((v) => gameIDs.includes(v.id));
    return gamesOfUser;
  };

  getAllGames = async (): Promise<Game[]> => {
    return this.games;
  };

  createUserGame = async (userID: string, gameID: string) => {
    const newUserGame: UserGame = {
      id: this.usersGames.length.toString(),
      userId: userID,
      gameId: gameID,
      boughtDate: new Date(),
    };

    this.usersGames.push(newUserGame);

    const game = this.games.find((v) => v.id === gameID);

    return game;
  };
}
