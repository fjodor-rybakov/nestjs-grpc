import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(process.cwd(), 'proto/hero.proto'),
      url: '0.0.0.0:5000',
    },
  });
  const logger = new Logger(bootstrap.name);
  await app.listen(() => {
    logger.log('Hero service was started!');
  });
}
bootstrap();
