import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swaggerRegisterModules } from './swagger-register-modules';

export const createSwaggerDoc = async (app: INestApplication) => {
  const document = createDocument(app);

  SwaggerModule.setup("/docs", app, document);
};

export const createDocument = function(app) {
  const config = new DocumentBuilder()
      .setTitle("Boilerplate Nestjs API")
      .setDescription("The Boilerplate Nestjs API documentation")
      .setVersion("1.0")
      .addBearerAuth()
      .build();

  return SwaggerModule.createDocument(app, config, {
    include: swaggerRegisterModules,
  });
};
