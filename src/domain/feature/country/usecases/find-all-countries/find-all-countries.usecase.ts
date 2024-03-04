import { CountryRepository } from '@domain/feature/country/ports/country.repository';
import { CountryTable } from '@domain/feature/country/entities/countryTable';
import { Signal } from '@angular/core';

export class FindAllCountriesUsecase {
  constructor(private readonly countryRepository: CountryRepository) {}

  execute(): Signal<CountryTable[] | undefined> {
    return this.countryRepository.getCountries();
  }
}
