import { State } from '@domain/feature/country/entities/state';
import { Country } from '@domain/feature/country/entities/country';

export interface CountryDetail {
  country?: Country;
  states?: State[];
}
