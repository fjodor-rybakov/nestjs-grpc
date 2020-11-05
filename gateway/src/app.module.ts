import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join, resolve } from 'path';
import { HeroService } from './hero.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(resolve(process.cwd(), '..'), 'proto/hero.proto'),
        },
      },
    ]),
  ],
  controllers: [HeroController],
  providers: [HeroService],
})
export class AppModule {}
