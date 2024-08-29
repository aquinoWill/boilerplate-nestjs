import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { createSwaggerDoc } from './configs/swagger/create-swagger-docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({origin: "*", methods: "*"});
  await createSwaggerDoc(app);
  await app.listen(3000);
}
bootstrap();
