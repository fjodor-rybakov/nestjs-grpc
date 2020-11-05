import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class HeroService implements OnModuleInit {
  private readonly logger = new Logger(HeroService.name);
  private heroesService: any;

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.heroesService = this.client.getService('HeroesService');
  }

  async getHero() {
    const data = { id: 1 };
    this.logger.log('Send request to hero service with data');
    this.logger.log(data);
    const response = await this.heroesService.findOne(data).toPromise();
    this.logger.log('Receive data');
    this.logger.log(response);
  }
}
