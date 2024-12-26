import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './Exception/cats.exception-filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter())
  // app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: true, whitelist: true, forbidNonWhitelisted: true}))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();