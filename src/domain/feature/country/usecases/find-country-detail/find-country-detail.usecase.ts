import { CountryRepository } from '@domain/feature/country/ports/country.repository';
import { Signal } from '@angular/core';
import { CountryDetail } from '@domain/feature/country/entities/countryDetail';

export class FindCountryDetailUsecase {
  constructor(private readonly countryRepository: CountryRepository) {
  }

  execute(): Signal<CountryDetail | undefined> {
    return this.countryRepository.getCountryDetail();
  }
}
