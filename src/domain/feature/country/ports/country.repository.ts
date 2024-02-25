import { Signal } from '@angular/core';
import { Country } from '@domain/feature/country/entities/country';

export interface CountryRepository {
  getCountries(): Signal<Country[] | undefined>;
}
