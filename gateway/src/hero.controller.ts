import { Controller, Get } from '@nestjs/common';
import { HeroService } from './hero.service';

@Controller()
export class HeroController {
  constructor(private readonly appService: HeroService) {}

  @Get()
  async getHero(): Promise<void> {
    return this.appService.getHero();
  }
}
