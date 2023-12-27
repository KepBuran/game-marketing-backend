import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':game_id')
  async getGamesOfUser(@Param() { game_id }: any) {
    return await this.usersService.getUsersOfGame(game_id);
  }
}
