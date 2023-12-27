import { Controller, Get, Param } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get(':user_id')
  async getGamesOfUser(@Param() { user_id }: any) {
    return await this.gamesService.getGamesOfUser(user_id);
  }
}
