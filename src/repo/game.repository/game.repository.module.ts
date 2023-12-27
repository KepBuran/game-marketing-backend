import { Module } from '@nestjs/common';
import { GameRepository } from './game.repository.service';

@Module({
  imports: [],
  controllers: [],
  providers: [GameRepository],
  exports: [GameRepository],
})
export class GameRepositoryModule {}
