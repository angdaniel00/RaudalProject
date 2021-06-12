import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { fastifyHelmet } from 'fastify-helmet';
import * as csurf from 'csurf';
import { CacheModule } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  //app.use(csurf());
  await app.listen(3000);
}
bootstrap();
