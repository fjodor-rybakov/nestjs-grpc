import { HeroParam } from './hero-param.interface';
import { HeroResponse } from './hero.response';

export interface HeroService {
  findOne(param: HeroParam): HeroResponse;
}
