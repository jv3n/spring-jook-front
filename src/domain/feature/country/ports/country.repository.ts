import { Signal } from '@angular/core';
import { Country } from '@domain/feature/country/entities/country';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';

export interface CountryRepository {
  getCountries(): Signal<Country[] | undefined>;

  getCountryDetail(): Signal<CountryDetail | undefined>;
}
