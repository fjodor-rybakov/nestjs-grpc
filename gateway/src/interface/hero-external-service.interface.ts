import { HeroParam } from './hero-param.interface';
import { HeroResponse } from './hero.response';

export interface HeroExternalService {
  findOne(param: HeroParam): HeroResponse;
}
