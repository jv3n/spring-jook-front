import { CountryRepository } from '@domain/feature/country/ports/country.repository';
import { Country } from '@domain/feature/country/entities/country';
import { Signal } from '@angular/core';

export class FindAllCountriesUsecase {
  constructor(private readonly countryRepository: CountryRepository) {}

  execute(): Signal<Country[] | undefined> {
    return this.countryRepository.getCountries();
  }
}
