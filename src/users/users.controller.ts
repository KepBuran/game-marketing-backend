import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':game_id')
  async getUsersOfGame(@Param() { game_id }: any) {
    return await this.usersService.getUsersOfGame(game_id);
  }

  @Post('login')
  async login(@Body() data: { username: string; password: string }) {
    const { username, password } = data;
    const loginResult = await this.usersService.login(username, password);
    return loginResult;
  }

  @Post('signIn')
  async signIn(@Body() data: { username: string; password: string }) {
    const { username, password } = data;
    const signInResult = await this.usersService.signIn(username, password);
    return signInResult;
  }
}
