import { State } from '@domain/feature/country/entities/state';
import { City } from '@domain/feature/country/entities/city';

export interface CountryDetail {
  id?: number;
  name?: string;
  states?: State[];
  cities?: City[];
}
