import type { FastifyCookieOptions } from '@fastify/cookie';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptionFilters';
import { setupSwagger, sigInt, sigTerm } from './utils';

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
  await app.register(cors, { origin: true });
  await app.register(cookie, {
    secret: 'my-secret',
    parseOptions: {},
  } as FastifyCookieOptions);

  setupSwagger(app);
  sigInt(app);
  sigTerm(app);

  logger.log(`Server start in localhost:${PORT}`, 'Application Bootstrap');
  await app.listen(PORT || 3000);
}
bootstrap();
