import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join, resolve } from 'path';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(resolve(process.cwd(), '..'), 'proto/hero.proto'),
      loader: {},
    },
  });
  const logger = new Logger(bootstrap.name);
  await app.listen(() => {
    logger.log('Hero service was started!');
  });
}
bootstrap();
