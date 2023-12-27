import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { GameRepositoryModule } from 'src/repo/game.repository/game.repository.module';

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [GameRepositoryModule],
})
export class GamesModule {}
