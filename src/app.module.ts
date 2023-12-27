import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [GamesModule, UsersModule],
})
export class AppModule {}
