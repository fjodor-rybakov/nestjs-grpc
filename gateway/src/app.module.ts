import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HeroService } from './hero.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(process.cwd(), 'proto/hero.proto'),
          url: 'hero-service:5000',
        },
      },
    ]),
  ],
  controllers: [HeroController],
  providers: [HeroService],
})
export class AppModule {}
