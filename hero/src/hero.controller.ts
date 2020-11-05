import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HeroParam } from './interface/hero-param.interface';
import { HeroService } from './interface/hero-external-service.interface';

@Controller()
export class HeroController implements HeroService {
  private readonly logger = new Logger(HeroController.name);

  @GrpcMethod('HeroesService')
  findOne(data: HeroParam): any {
    this.logger.log('Incoming request for find one hero with data');
    this.logger.log(data);
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
