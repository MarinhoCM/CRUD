import { NestFactory } from '@nestjs/core';
import { StudentsModule } from './backend/students/students.module';
import { env } from './config/env'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(StudentsModule);
  app.useGlobalPipes(new ValidationPipe);
  await app.listen(env.SRV_PORT || 3000);
}
bootstrap();
