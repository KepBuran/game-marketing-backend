import { Injectable } from '@nestjs/common';
import { GameRepository } from 'src/repo/game.repository/game.repository.service';

@Injectable()
export class GamesService {
  constructor(private readonly gameRepo: GameRepository) {}

  async getGamesOfUser(userID: string) {
    return await this.gameRepo.getGamesOfUser(userID);
  }
}
