import { type INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config = new ConfigService();
  const port = config.get<number>('PORT');
  const PROD_URL = config.get<string>('PROD_URL');
  const NODE_ENV = config.get<string>('NODE_ENV') || 'development';
  const documentBuilder = new DocumentBuilder()
    .setTitle('Happify API')
    .setDescription('Happify API documentation')
    .setVersion('1.0.0');

  const document = SwaggerModule.createDocument(app, documentBuilder.build());
  SwaggerModule.setup('documentation', app, document);

  if (NODE_ENV === 'production') {
    Logger.log(
      `Swagger locale on ${PROD_URL}documentation`,
      'Swagger Bootstrap',
    );
  } else {
    Logger.log(
      `Swagger locale on http://localhost:${port}/documentation`,
      'Swagger Bootstrap',
    );
  }
}
