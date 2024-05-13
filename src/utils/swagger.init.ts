import { type INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config = new ConfigService();
  const port = config.get<number>('PORT');
  const documentBuilder = new DocumentBuilder()
    .setTitle('Happify API')
    .setDescription('Happify API doc')
    .setVersion('1.0');

  const document = SwaggerModule.createDocument(app, documentBuilder.build());
  SwaggerModule.setup('documentation', app, document);
  Logger.log(
    `Swagger locale on http://localhost:${port}/documentation`,
    'Swagger Bootstrap',
  );
}
