import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get(':user_id')
  async getGamesOfUser(@Param() { user_id }: any) {
    return await this.gamesService.getGamesOfUser(user_id);
  }

  @Get()
  async getAllGames() {
    return await this.gamesService.getAllGames();
  }

  @Post('buyGame')
  async buyGame(@Body() data: { userId: string; gameId: string }) {
    const { userId, gameId } = data;
    const buyGameResult = await this.gamesService.buyGame(userId, gameId);
    return buyGameResult;
  }
}
