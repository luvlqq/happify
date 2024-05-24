import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import multiPart from '@fastify/multipart';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { HttpExceptionFilter } from '@shared/exceptions';
import { setupSwagger, sigInt, sigTerm } from '@utils';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const config = new ConfigService();
  const PORT = config.get<number>('PORT');
  const logger = new Logger();

  app.enableShutdownHooks();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.register(multiPart);
  await app.register(cors, { origin: true });
  await app.register(cookie);

  setupSwagger(app);
  sigInt(app);
  sigTerm(app);

  logger.log(`Server start in localhost:${PORT}`, 'Application Bootstrap');
  await app.listen(PORT || 3000);
}

bootstrap();
