import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/repo/user.repository/user.repository.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [UserRepositoryModule],
})
export class UsersModule {}
