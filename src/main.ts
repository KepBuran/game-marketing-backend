import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // allow to server to accept request from different origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // allow session cookie from browser to pass through
    exposedHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    optionsSuccessStatus: 200,
  });

  await app.listen(3001);
}
bootstrap();
